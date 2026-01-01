"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 px-6 md:px-64 lg:px-[500px] backdrop-filter backdrop-blur-lg bg-opacity-40 py-2'>
      <div className='flex items-center justify-between md:px-0'>
        <Link
          href='/'
          className='flex items-center gap-2 text-xl font-bold hover:underline font-plusJakartaSans'>
          <Image
            src='/images/glosrg.jpg'
            width={800}
            height={600}
            alt='sahal-logo'
            className='w-6 rounded-full'
          />
          <span className='text-sm'>Sahal Nurdin</span>
        </Link>
        <div className='items-center hidden gap-2 md:flex'>
          <Link
            href='/projects'
            className='text-sm font-normal hover:underline hover:text-[#6d9886]'>
            Projects
          </Link>
          <Link
            href='/blog'
            prefetch={false}
            className='text-sm font-normal hover:underline hover:text-[#6d9886]'>
            Blogs
          </Link>
          <a
            href='https://github.com/SahalN/sahal-portfolio'
            target='_blank'
            className='flex items-center  text-sm font-normal hover:underline hover:text-[#6d9886]'>
            <FaGithub className='mr-1' />
            Source
          </a>
          <ThemeToggle />
        </div>
        <button
          onClick={toggleMenu}
          type='button'
          className='w-10 h-10 p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
          aria-controls='navbar-hamburger'
          aria-expanded={isMenuOpen}>
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} w-full md:hidden`}
        id='navbar-hamburger'>
        <ul className='flex flex-col items-center gap-6 my-3'>
          <li>
            <Link
              href='/projects'
              className='text-sm font-normal hover:underline hover:text-[#6d9886]'>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/blog'
              prefetch={false}
              className='text-sm font-normal hover:underline hover:text-[#6d9886]'>
              Blogs
            </Link>
          </li>
          <li>
            <a
              href='https://github.com/SahalN/sahal-portfolio'
              target='_blank'
              className='flex items-center gap-2 text-sm font-normal hover:underline hover:text-[#6d9886]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              Source
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
