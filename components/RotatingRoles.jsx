"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function RotatingRoles({ roles: rawRoles, roleKeys, interval = 2200 }) {
  const { t } = useLanguage();
  const roles = roleKeys ? roleKeys.map((key) => t(key)) : rawRoles;
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, interval);

    return () => clearInterval(id);
  }, [roles.length, interval, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span>{roles.join(" / ")}</span>;
  }

  return (
    <span className='inline-grid align-bottom'>
      {/* Sizer: keeps the width locked to the longest role so the text
          around it never shifts while the roles swap. */}
      {roles.map((role) => (
        <span
          key={role}
          aria-hidden='true'
          className='invisible col-start-1 row-start-1 whitespace-nowrap'>
          {role}
        </span>
      ))}
      <AnimatePresence mode='wait'>
        <motion.span
          key={roles[index]}
          className='col-start-1 row-start-1 whitespace-nowrap'
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ ease: "easeInOut", duration: 0.35 }}>
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

RotatingRoles.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string),
  roleKeys: PropTypes.arrayOf(PropTypes.string),
  interval: PropTypes.number,
};
