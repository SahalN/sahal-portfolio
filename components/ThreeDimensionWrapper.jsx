"use client"

import dynamic from "next/dynamic"

const ThreeDimension = dynamic(() => import("./ThreeDimension"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[640px] md:h-[640px] bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800"></div>
  )
});

export default function ThreeDimensionWrapper() {
  return (
    <>
      {/* Hide on mobile with CSS, show on desktop */}
      <div className="hidden md:block">
        <ThreeDimension/>
      </div>
      {/* Mobile placeholder */}
      <div className="block md:hidden w-full h-[300px] bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800"></div>
    </>
  )
}