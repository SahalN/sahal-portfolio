/** @format */
import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link
            href='/'
            className='font-semibold text-orange-800 hover:underline'>
            Home
          </Link>
        </li>
        <li className='ml-auto'>
          <Link
            href='/projects'
            className='font-semibold text-orange-800 hover:underline'>
            projects
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            prefetch={false}
            className='font-semibold text-orange-800 hover:underline'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
