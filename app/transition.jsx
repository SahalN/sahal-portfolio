/** @format */

"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Transition({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "easeInOut", duration: 0.75 }}>
      {children}
    </motion.div>
  );
}
