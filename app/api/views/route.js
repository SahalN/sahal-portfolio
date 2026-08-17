import { createHash } from "node:crypto";

// Route Handlers are dynamic by design; only this endpoint is. Every page of
// the site stays statically prerendered.
export const dynamic = "force-dynamic";

const TOTAL_KEY = "portfolio:views";
// One visitor is counted at most once per 12 hours.
const DEDUPE_TTL_SECONDS = 43_200;

// Redis-backed limit: survives across serverless instances, costs commands.
const RATE_WINDOW_SECONDS = 60;
const RATE_MAX_PER_WINDOW = 4;

// In-memory limit: free, no Redis round trip, but only covers requests that
// land on this warm instance. It is the layer that keeps a flood from burning
// the Upstash quota, so it is deliberately stricter than the Redis one.
const MEMORY_WINDOW_MS = 60_000;
const MEMORY_MAX_PER_WINDOW = 2;
const MEMORY_MAX_ENTRIES = 5_000;

// The Vercel marketplace integration injects the KV_* names; a plain Upstash
// project injects the UPSTASH_* ones. Accept either.
const REDIS_URL =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const recentRequests = new Map();
// Last total seen from Redis, so throttled requests still get a number back
// without spending a command on them.
let lastKnownTotal = null;

// Never send the token to the browser: it only ever lives in this handler.
async function redis(commands) {
  const response = await fetch(`${REDIS_URL}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Redis responded ${response.status}`);

  const results = await response.json();
  const failed = results.find((entry) => entry.error);
  if (failed) throw new Error(failed.error);
  return results.map((entry) => entry.result);
}

// Only requests the browser makes from this site are counted. A cross-site
// page or a bare script (curl sends neither header) is rejected before any
// Redis command is spent.
function isSameOrigin(request) {
  const host = request.headers.get("host");
  const origin = request.headers.get("origin");

  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }

  const site = request.headers.get("sec-fetch-site");
  return site === "same-origin" || site === "same-site";
}

// Vercel overwrites x-forwarded-for with the real client address and refuses to
// forward external ones precisely to stop IP spoofing, so this value cannot be
// forged in production. x-vercel-forwarded-for is preferred because a proxy in
// front of Vercel could still rewrite the standard header.
function clientAddress(request) {
  const header =
    request.headers.get("x-vercel-forwarded-for") ||
    request.headers.get("x-forwarded-for") ||
    "";
  return header.split(",")[0].trim() || "unknown";
}

// Identifies a visitor without ever storing anything personal: the address is
// salted and hashed, and the key expires after DEDUPE_TTL_SECONDS.
function fingerprint(request) {
  const salt = process.env.VIEW_COUNTER_SALT || REDIS_TOKEN || "";
  return createHash("sha256")
    .update(
      `${salt}:${clientAddress(request)}:${
        request.headers.get("user-agent") || ""
      }`
    )
    .digest("hex")
    .slice(0, 32);
}

function isFlooding(id) {
  const now = Date.now();

  // Bounded cleanup: a flood from many addresses must not grow this map
  // without limit, which would be a memory exhaustion vector of its own.
  if (recentRequests.size > MEMORY_MAX_ENTRIES) {
    for (const [key, entry] of recentRequests) {
      if (now - entry.start > MEMORY_WINDOW_MS) recentRequests.delete(key);
    }
    if (recentRequests.size > MEMORY_MAX_ENTRIES) recentRequests.clear();
  }

  const entry = recentRequests.get(id);
  if (!entry || now - entry.start > MEMORY_WINDOW_MS) {
    recentRequests.set(id, { start: now, count: 1 });
    return false;
  }

  entry.count += 1;
  return entry.count > MEMORY_MAX_PER_WINDOW;
}

function payload(views, status = 200) {
  return Response.json(
    { views },
    { status, headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(request) {
  // Not configured (local dev without env vars): report "unavailable" so the
  // badge hides itself instead of rendering an error.
  if (!REDIS_URL || !REDIS_TOKEN) return payload(null);

  if (!isSameOrigin(request)) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  const id = fingerprint(request);

  // Layer 1, free: hand back the cached number instead of touching Redis.
  if (isFlooding(id)) {
    return payload(lastKnownTotal, 429);
  }

  try {
    // Layer 2: rate limit, dedupe mark and current total in a single round
    // trip, so a rejected request never costs more than one call.
    const rateKey = `portfolio:rate:${id}`;
    const [hits, , claimed, total] = await redis([
      ["INCR", rateKey],
      ["EXPIRE", rateKey, String(RATE_WINDOW_SECONDS)],
      [
        "SET",
        `portfolio:seen:${id}`,
        "1",
        "NX",
        "EX",
        String(DEDUPE_TTL_SECONDS),
      ],
      ["GET", TOTAL_KEY],
    ]);

    if (total !== null) lastKnownTotal = Number(total) || 0;

    if (Number(hits) > RATE_MAX_PER_WINDOW) return payload(lastKnownTotal, 429);

    // claimed === "OK" means this visitor was not marked yet: a real new view.
    if (claimed === "OK") {
      const [next] = await redis([["INCR", TOTAL_KEY]]);
      lastKnownTotal = Number(next) || 0;
    }

    return payload(lastKnownTotal ?? 0);
  } catch (error) {
    // Log for the server, stay silent to the client: upstream errors must not
    // leak configuration details into a public response.
    console.error("View counter failed:", error);
    return payload(lastKnownTotal);
  }
}
