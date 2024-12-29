/** @format */

import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ThreeDimension from "../components/ThreeDimension";
import "./globals.css";
import { inter, plusJakartaSans } from "./fonts";

export const metadata = {
  title: {
    default: "Sahal's Portfolio",
    template: "%s | Sahal Nurdin's Portfolio",
  },
  description:
    "Discover Sahal Nurdin's Portfolio, featuring skills, projects, and experiences in web development and UI/UX design.",
  keywords: "web developer, portfolio, UI/UX design, Sahal Nurdin",
  author: "Muhammad Sahal Nurdin",
  // ogImage: "https://example.com/og-image.jpg", // nanti ini
  url: "https://www.sahalnurdin.site/",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <Head>
        {/* Basic Meta Tags */}
        <title>{metadata.title.default}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='author' content={metadata.author} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content={metadata.title.default} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content={metadata.ogImage} />
        <meta property='og:url' content={metadata.url} />
        <meta property='og:type' content='website' />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metadata.title.default} />
        <meta name='twitter:description' content={metadata.description} />
        <meta name='twitter:image' content={metadata.ogImage} />
        <meta
          name='google-site-verification'
          content='So-1ix6ivPbmDjDu61ax-FNuTQvh2kTm_dgj4JeCw00'
        />

        {/* Canonical URL */}
        <link rel='canonical' href={metadata.url} />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='flex flex-col bg-[#F6F6F6] dark:bg-[#212121] text-black dark:text-white'>
        {/* Header Section */}
        <header>
          <NavBar />
          <ThreeDimension />
        </header>

        {/* Main Content */}
        <main className='relative px-6 py-3 -mt-44 md:-mt-72 grow md:px-64 lg:px-[500px]'>
          {children}
        </main>

        {/* Footer Section */}
        <footer className='py-3 text-xs text-center text-slate-50 px-6 md:px-64 lg:px-[500px]'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
