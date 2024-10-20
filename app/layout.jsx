/** @format */

import NavBar from "../components/NavBar";
import "./globals.css";
import { inter, plusJakartaSans } from "./fonts";

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
      <body className='flex flex-col min-h-screen bg-[#ffffffcc]'>
        <header className='sticky top-0 z-50 py-3 bg-white px-72 backdrop-filter backdrop-blur-lg bg-opacity-30'>
          <NavBar />
        </header>
        <main className='py-3 px-72 grow'>{children}</main>
        <footer className='py-3 text-xs text-center border-t px-72 text-slate-50'>
          &copy;
          <a
            href='https://www.linkedin.com/in/muhammadsahalnurdin/'
            target='_blank'
            className='text-orange-800 hover:underline'>
            Muhammad Sahal Nurdin
          </a>
          2024
        </footer>
      </body>
    </html>
  );
}
