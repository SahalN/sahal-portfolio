/** @format */
"use client";
import { useState, useEffect } from "react";

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle theme change and save preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = (event) => {
    const newDarkMode = event.target.checked;
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDarkMode(newDarkMode);
  };

  return (
    <>
      <label className='inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          className='sr-only peer'
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        <span className='text-sm font-medium text-gray-900 ms-3 dark:text-gray-300'>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </label>
    </>
  );
}
