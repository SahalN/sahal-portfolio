import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./globals.css";
import { inter, plusJakartaSans } from "./fonts";
import ThreeDimensionWrapper from "../components/ThreeDimensionWrapper";
import LanguageProvider from "../components/LanguageProvider";
import { Analytics } from "@vercel/analytics/next";


export const metadata = {
  title: {
    default: "Sahal's Portfolio",
    template: "%s | Sahal Nurdin's Portfolio",
  },
  description:
    "Discover Sahal Nurdin's Portfolio, featuring skills, projects, and experiences in web development and UI/UX design.",
  keywords: "web developer, portfolio, UI/UX design, Sahal Nurdin",
  authors: [{ name: "Muhammad Sahal Nurdin" }],
  openGraph: {
    title: "Sahal's Portfolio",
    description: "Discover Sahal Nurdin's Portfolio, featuring skills, projects, and experiences in web development and UI/UX design.",
    url: "https://www.sahalnurdin.site/",
    siteName: "Sahal's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahal's Portfolio",
    description: "Discover Sahal Nurdin's Portfolio, featuring skills, projects, and experiences in web development and UI/UX design.",
  },
  metadataBase: new URL("https://www.sahalnurdin.site"),
};


export default function RootLayout({ children }) {
  return (
    // Browser extensions add their own attributes to <html> and <body> before
    // React hydrates (ColorZilla's cz-shortcut-listen, for one), and the theme
    // class is written to <html> on the client. suppressHydrationWarning covers
    // only these two elements' own attributes, so real mismatches deeper in the
    // tree are still reported.
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body
        suppressHydrationWarning
        className='flex flex-col bg-[#F6F6F6] dark:bg-[#212121] text-black dark:text-white'>
        <LanguageProvider>
          <header>
            <NavBar />
            <ThreeDimensionWrapper/>
          </header>
          {/* A centred max-width column instead of huge side padding: padding
              that big collapsed the content to 24px on a 1024px tablet. */}
          <main className='relative w-full max-w-3xl px-6 py-3 mx-auto -mt-44 md:-mt-72 grow sm:px-8'>
            {children}
          </main>
          <footer className='w-full max-w-3xl px-6 py-3 mx-auto text-xs text-center text-slate-50 sm:px-8'>
            <Footer />
          </footer>
        </LanguageProvider>
        {/* Script and beacon are served from this origin (/_vercel/insights/*),
            so the CSP in next.config.js needs no exception for it. */}
        <Analytics />
      </body>
    </html>
  );
}
