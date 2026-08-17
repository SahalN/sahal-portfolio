"use client";

import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const EASE = [0.22, 1, 0.36, 1];

const variants = {
  left: {
    initial: { opacity: 0, x: -32 },
    animate: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: 32 },
    animate: { opacity: 1, x: 0 },
  },
  // Opens from the middle towards both edges instead of sliding in.
  wipe: {
    initial: { opacity: 0, clipPath: "inset(0% 50% 0% 50%)" },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
  },
  // Chat-bubble entrance: a spring overshoot is what reads as "popping in"
  // rather than fading in.
  pop: {
    initial: { opacity: 0, scale: 0.8, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { type: "spring", stiffness: 460, damping: 17 },
  },
};

export default function Reveal({ from = "left", delay = 0, className, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  const variant = variants[from];

  return (
    <motion.div
      className={className}
      initial={variant.initial}
      animate={variant.animate}
      transition={{ duration: 0.7, ease: EASE, ...variant.transition, delay }}>
      {children}
    </motion.div>
  );
}

Reveal.propTypes = {
  from: PropTypes.oneOf(["left", "right", "wipe", "pop"]),
  delay: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
