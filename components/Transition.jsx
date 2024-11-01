/** @format */

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
        // If the element is intersecting, set visibility to true
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer on unmount
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
      animate={isVisible ? { y: 0, opacity: 1 } : {}} // Only animate when visible
      transition={{ ease: "easeInOut", duration: 0.75 }}>
      {children}
    </motion.div>
  );
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
};
