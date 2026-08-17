import matter from "gray-matter";
import { marked } from "marked";
import { readFile, readdir } from "node:fs/promises";
import { basename, join, resolve, sep } from "node:path";

const CONTENT_DIR = resolve(process.cwd(), "content", "projects");
// Indonesian translations live in a subfolder; readdir below ignores it
// because directory entries never end in ".md".
const CONTENT_DIR_ID = join(CONTENT_DIR, "id");

// Only a-z, 0-9 and dashes. Anything else (slashes, dots, encoded traversal
// sequences, NUL bytes) never reaches the filesystem.
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

function resolveProjectPath(slug, dir = CONTENT_DIR) {
  if (typeof slug !== "string" || !SLUG_PATTERN.test(slug)) return null;

  // Second gate: the resolved path must still sit inside the content folder.
  const filePath = join(dir, `${slug}.md`);
  if (!filePath.startsWith(dir + sep)) return null;

  return filePath;
}

// Returns null when a translation is missing, so callers fall back to English
// instead of breaking the page.
async function readTranslation(slug) {
  const filePath = resolveProjectPath(slug, CONTENT_DIR_ID);
  if (!filePath) return null;

  try {
    const text = await readFile(filePath, "utf8");
    const { content, data } = matter(text);
    return {
      title: data.title,
      body: marked(content, { headerIds: false, mangle: false }),
    };
  } catch {
    return null;
  }
}

export async function getFeaturedProject() {
  const projects = await getProjects();
  return projects[0];
}

export async function getProject(slug) {
  const filePath = resolveProjectPath(slug);
  if (!filePath) return null;

  let text;
  try {
    text = await readFile(filePath, "utf8");
  } catch {
    // Missing file: the caller renders a 404 instead of leaking a stack trace.
    return null;
  }

  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  const translation = await readTranslation(slug);

  return {
    slug,
    title,
    date,
    image,
    body,
    // Both languages ship with the page: the language switch is client-side,
    // so there is no server round trip to fetch the other version.
    titles: { en: title, id: translation?.title || title },
    bodies: { en: body, id: translation?.body || body },
  };
}

export async function getProjects() {
  const slugs = await getSlugs();
  const projects = [];
  for (const slug of slugs) {
    const project = await getProject(slug);
    if (project) projects.push(project);
  }
  projects.sort((a, b) => b.date.localeCompare(a.date));
  return projects;
}

export async function getSlugs() {
  const files = await readdir(CONTENT_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => basename(file, ".md"))
    .filter((slug) => SLUG_PATTERN.test(slug));
}
