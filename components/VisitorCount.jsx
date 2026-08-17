"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

// Module scope: survives client-side navigation, resets on a real page load.
// Keeps the counter to one request per visit instead of one per route change.
let cached = null;

export default function VisitorCount() {
  const { lang, t } = useLanguage();
  const [views, setViews] = useState(cached);
  const requested = useRef(false);

  useEffect(() => {
    if (cached !== null || requested.current) return;
    requested.current = true;

    let active = true;
    fetch("/api/views", { method: "POST" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!active || typeof data?.views !== "number") return;
        cached = data.views;
        setViews(data.views);
      })
      .catch(() => {
        // Counter is decoration: a failure leaves the badge hidden.
      });

    return () => {
      active = false;
    };
  }, []);

  // Nothing rendered until a real number arrives, so the footer never shows a
  // placeholder or shifts twice.
  if (views === null) return null;

  return (
    <span className='block mt-1 text-gray-500 dark:text-gray-400'>
      {new Intl.NumberFormat(lang === "id" ? "id-ID" : "en-US").format(views)}{" "}
      {t(views === 1 ? "footer.views.one" : "footer.views.other")}
    </span>
  );
}
