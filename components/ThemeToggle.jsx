"use client";

import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useLanguage } from "./LanguageProvider";

const ThemeToggle = () => {
  const { t } = useLanguage();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const isDark = theme === "dark";

  // A real cube: two faces pushed half the button's size (18px of 36px) along
  // their own normals, so the whole block rolls instead of the icon alone.
  const faceClass =
    "absolute inset-0 flex items-center justify-center rounded [backface-visibility:hidden]";

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t("theme.switch")}
      className='w-9 h-9'
      style={{ perspective: "120px" }}>
      <span
        className='relative block w-full h-full transition-transform duration-500 ease-out motion-reduce:transition-none'
        style={{
          transformStyle: "preserve-3d",
          // Rolling the cube +90° brings the bottom face to the front and
          // sends the front face up and out of view.
          transform: isDark ? "rotateX(90deg)" : "rotateX(0deg)",
        }}>
        <span
          className={`${faceClass} text-gray-800 bg-gray-200`}
          style={{ transform: "translateZ(18px)" }}>
          <FaMoon />
        </span>
        <span
          className={`${faceClass} text-white bg-[#6D9886]`}
          style={{ transform: "rotateX(-90deg) translateZ(18px)" }}>
          <GoSun />
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
