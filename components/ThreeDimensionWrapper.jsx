"use client"

import dynamic from "next/dynamic"

const ThreeDimension = dynamic(() => import("./ThreeDimension"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[640px] flex items-center justify-center"> Loading 3D Scene...</div>
  )
});

export default function ThreeDimensionWrapper() {
    return <ThreeDimension/>
}