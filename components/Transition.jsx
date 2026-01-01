"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

export default function Transition({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      style={{ willChange: isVisible ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
};
