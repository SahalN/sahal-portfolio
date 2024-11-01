/** @format */

import NavBar from "../components/NavBar";
import "./globals.css";
import { inter, plusJakartaSans } from "./fonts";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Sahal's Portfolio",
    template: "%s | Sahal's Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${plusJakartaSans.variable} `}>
      <body className='flex flex-col min-h-screen bg-[#ffffffcc] px-72 dark:bg-gray-900 text-black dark:text-white '>
        <header className='sticky top-0 z-50 px-2 py-3 backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-xl'>
          <NavBar />
        </header>
        <main className='justify-center py-3 grow'>{children}</main>
        <footer className='py-3 text-xs text-center border-t text-slate-50'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
