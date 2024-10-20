/** @format */
import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <ul className='flex gap-6 pt-2'>
        <li>
          <Link
            href='/'
            className='text-xl font-bold text-black hover:underline'>
            Sahal Nurdin
          </Link>
        </li>
        <li className='ml-auto'>
          <Link
            href='/about'
            prefetch={false}
            className='font-semibold text-black hover:underline'>
            About
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className='text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
            projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
