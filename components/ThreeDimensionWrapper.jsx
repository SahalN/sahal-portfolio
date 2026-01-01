"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const ThreeDimension = dynamic(() => import("./ThreeDimension"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[640px] flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800"></div>
  )
});

export default function ThreeDimensionWrapper() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[300px] md:h-[640px] bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800"></div>;
  }

  // Jangan render 3D di mobile untuk performa
  if (isMobile) {
    return (
      <div className="w-full h-[300px] bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800"></div>
    );
  }

  return <ThreeDimension/>
}