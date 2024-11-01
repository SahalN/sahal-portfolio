/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        plusJakartaSans: ["var(--font-plusJakartaSans)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
