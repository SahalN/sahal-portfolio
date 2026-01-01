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
  const [shouldRender3D, setShouldRender3D] = useState(null);

  useEffect(() => {
    // Check sekali saja saat mount
    const isMobile = window.innerWidth < 768;
    setShouldRender3D(!isMobile);
  }, []);

  // Loading state
  if (shouldRender3D === null) {
    return <div className="w-full h-[300px] md:h-[640px] bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800"></div>;
  }

  // Mobile: render placeholder
  if (!shouldRender3D) {
    return (
      <div className="w-full h-[300px] bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800"></div>
    );
  }

  // Desktop: render 3D
  return <ThreeDimension/>
}