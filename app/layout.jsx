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
    <html
      lang='en'
      className={`${inter.variable} ${plusJakartaSans.variable} `}>
      <body className='flex flex-col bg-[#F0E7DB] dark:bg-[#202023] text-black dark:text-white '>
        <header className=''>
          <NavBar />
          <ThreeDimension />
        </header>
        <main className='relative -mt-72 justify-center py-3 grow md:px-[590px] '>
          {children}
        </main>
        <footer className='py-3 text-xs text-center  text-slate-50 md:px-[590px]'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
