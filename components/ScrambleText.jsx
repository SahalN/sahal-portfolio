"use client";

import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const GLYPHS = "!<>-_\\/[]{}=+*^?#$%&";

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export default function ScrambleText({ text: rawText, k, className = "" }) {
  const { t } = useLanguage();
  const text = k ? t(k) : rawText;
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(null);
  const isRunningRef = useRef(false);

  // Keep the resting label in sync when the language changes mid-session.
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    isRunningRef.current = false;
    setDisplay(text);
  }, [text]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const scramble = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Hovering across a heading fires repeatedly; let the run in flight finish
    // instead of restarting it into a stutter.
    if (isRunningRef.current) return;

    isRunningRef.current = true;

    // Each character dissolves and resolves on its own schedule, so the word
    // breaks apart unevenly instead of flipping all at once.
    const queue = text.split("").map((char) => {
      const start = Math.floor(Math.random() * 8);
      return {
        char,
        start,
        end: start + 8 + Math.floor(Math.random() * 12),
        glyph: null,
      };
    });

    let frame = 0;

    const tick = () => {
      let output = "";
      let resolved = 0;

      for (const item of queue) {
        if (item.char === " " || frame >= item.end) {
          resolved += 1;
          output += item.char;
        } else if (frame >= item.start) {
          if (!item.glyph || Math.random() < 0.3) item.glyph = randomGlyph();
          output += item.glyph;
        } else {
          output += item.char;
        }
      }

      setDisplay(output);

      if (resolved === queue.length) {
        isRunningRef.current = false;
        return;
      }
      frame += 1;
      rafRef.current = requestAnimationFrame(tick);
    };

    tick();
  }, [text]);

  return (
    <button
      type='button'
      onClick={scramble}
      onMouseEnter={scramble}
      onFocus={scramble}
      className={`inline-grid text-left align-bottom ${className}`}>
      {/* Sizer: locks the width to the real text so the underline and the
          surrounding layout stay put while the glyphs churn. */}
      <span aria-hidden='true' className='invisible col-start-1 row-start-1'>
        {text}
      </span>
      <span className='sr-only'>{text}</span>
      <span
        aria-hidden='true'
        className='col-start-1 row-start-1 whitespace-pre'>
        {display}
      </span>
    </button>
  );
}

ScrambleText.propTypes = {
  text: PropTypes.string,
  k: PropTypes.string,
  className: PropTypes.string,
};
