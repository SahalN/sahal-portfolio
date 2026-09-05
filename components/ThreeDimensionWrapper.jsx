"use client";

import dynamic from "next/dynamic";

const ThreeDimension = dynamic(() => import("./ThreeDimension"), {
  ssr: false,
  // The scene is a square as wide as its container, so the placeholder has to
  // match that shape or the page jumps when the canvas takes over.
  loading: () => (
    <div className='w-full aspect-square md:aspect-auto md:h-[640px] bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800' />
  ),
});

export default function ThreeDimensionWrapper() {
  // Shown on every size. The old "hidden md:block" only hid it with CSS, so
  // phones downloaded three.js and moon.glb anyway and rendered them into a
  // 0x0 canvas — all of the cost, none of the picture.
  return <ThreeDimension />;
}
