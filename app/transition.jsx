/** @format */

"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Transition({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visible only when in view
            observer.unobserve(entry.target); // Stop observing after it becomes visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }} // Initial state
      animate={isVisible ? { y: 0, opacity: 1 } : {}} // Animate only if visible
      transition={{ ease: "easeInOut", duration: 0.75 }}>
      {children}
    </motion.div>
  );
}
