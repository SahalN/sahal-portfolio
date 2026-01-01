import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./globals.css";
import { inter, plusJakartaSans } from "./fonts";
import ThreeDimensionWrapper from "../components/ThreeDimensionWrapper";


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
    <html lang='en' className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className='flex flex-col bg-[#F6F6F6] dark:bg-[#212121] text-black dark:text-white'>
        <header>
          <NavBar />
          <ThreeDimensionWrapper/>
        </header>
        <main className='relative px-6 py-3 -mt-44 md:-mt-72 grow md:px-64 lg:px-[500px]'>
          {children}
        </main>
        <footer className='py-3 text-xs text-center text-slate-50 px-6 md:px-64 lg:px-[500px]'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
