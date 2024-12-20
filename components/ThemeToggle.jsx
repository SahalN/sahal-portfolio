/** @format */
"use client";
import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
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

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className='flex items-center p-2 bg-gray-200 rounded dark:bg-[#6D9886]  '>
      {theme === "dark" ? <GoSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
