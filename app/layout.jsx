/** @format */

import NavBar from "../components/NavBar";
import "./globals.css";
import { inter, plusJakartaSans } from "./fonts";
import Footer from "../components/Footer";

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
      <body className='flex flex-col min-h-screen bg-[#F0E7DB] dark:bg-[#202023] text-black dark:text-white '>
        <header className='sticky top-0 z-50 md:px-[590px] backdrop-filter backdrop-blur-lg bg-opacity-40 '>
          <NavBar />
        </header>
        <main className='justify-center py-3 grow md:px-[590px]'>
          {children}
        </main>
        <footer className='py-3 text-xs text-center border-t text-slate-50 md:px-[590px]'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
