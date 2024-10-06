/** @format */

import NavBar from "../components/NavBar";
import "./globals.css";
import { inter, plusJakartaSans } from "./fonts";

export const metadata = {
  title: {
    default: "Sahal's Portfolio",
    template: "%s | Sahal's Portfolio"
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${plusJakartaSans.variable} `}>
      <body className='flex flex-col min-h-screen px-4 py-2 bg-orange-50'>
        <header>
          <NavBar />
        </header>
        <main className='py-3 grow'>{children}</main>
        <footer className='py-3 text-xs text-center border-t text-slate-50'>
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
