/** @format */

import NavBar from "../components/NavBar";
import "./globals.css";
import { inter, plusJakartaSans } from "./fonts";
import Footer from "../components/Footer";
import ThreeDimension from "../components/ThreeDimension";

export const metadata = {
  title: {
    default: "Sahal's Portfolio",
    template: "%s | Sahal Nurdin's Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className='flex flex-col bg-[#F6F6F6] dark:bg-[#212121] text-black dark:text-white'>
        <header>
          <NavBar />
          <ThreeDimension />
        </header>
        <main className='relative px-6 py-3 -mt-44 md:-mt-72 grow md:px-64 lg:px-[500px] '>
          {children}
        </main>
        <footer className='py-3 text-xs text-center text-slate-50 px-6 md:px-64 lg:px-[500px]'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
