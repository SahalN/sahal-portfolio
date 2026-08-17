"use client";

import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

// Module scope: reset by a real page load, kept across client-side navigation.
// That is what limits the animation to "once per page load" instead of
// replaying every time the user comes back to this route.
let hasTyped = false;

export default function Typewriter({ text: rawText, k, speed = 45, startDelay = 400 }) {
  const { t } = useLanguage();
  const text = k ? t(k) : rawText;

  const [count, setCount] = useState(() => (hasTyped ? text.length : 0));
  const [isTyping, setIsTyping] = useState(false);
  const config = useRef({ text, speed, startDelay });
  const timers = useRef({ start: null, typing: null });

  const stopTimers = () => {
    clearTimeout(timers.current.start);
    clearInterval(timers.current.typing);
  };

  useEffect(() => {
    const { text, speed, startDelay } = config.current;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (hasTyped || prefersReducedMotion) {
      setCount(text.length);
      return;
    }

    hasTyped = true;
    setIsTyping(true);

    timers.current.start = setTimeout(() => {
      timers.current.typing = setInterval(() => {
        setCount((prev) => {
          if (prev >= text.length) {
            clearInterval(timers.current.typing);
            setIsTyping(false);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return stopTimers;
  }, []);

  // A language switch replaces the sentence: show it in full rather than
  // retyping or leaving the old length truncating the new text.
  useEffect(() => {
    if (text === config.current.text) return;
    stopTimers();
    config.current.text = text;
    setCount(text.length);
    setIsTyping(false);
  }, [text]);

  return (
    <span className='inline-grid text-left'>
      {/* Sizer: reserves the full sentence (plus the cursor) so the line
          never reflows while the characters are typed out. */}
      <span
        aria-hidden='true'
        className='invisible col-start-1 row-start-1 whitespace-pre-wrap'>
        {text}▌
      </span>
      <span className='sr-only'>{text}</span>
      <span
        aria-hidden='true'
        className='col-start-1 row-start-1 whitespace-pre-wrap'>
        {text.slice(0, count)}
        {isTyping && <span className='animate-pulse'>▌</span>}
      </span>
    </span>
  );
}

Typewriter.propTypes = {
  text: PropTypes.string,
  k: PropTypes.string,
  speed: PropTypes.number,
  startDelay: PropTypes.number,
};
