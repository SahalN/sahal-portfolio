/** @format */
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
export default function NavBar() {
  return (
    <nav>
      <ul className='flex items-center gap-6'>
        <li>
          <Link href='/' className='text-xl font-bold hover:underline'>
            Sahal Nurdin
          </Link>
        </li>
        <li className='ml-auto'>
          <Link
            href='/about'
            prefetch={false}
            className='text-base font-semibold hover:underline'>
            About Me
          </Link>
        </li>

        <li>
          <Link
            href='/projects'
            className='text-base font-semibold hover:underline'>
            Projects
          </Link>
        </li>
        <li>
          <div>
            <ThemeToggle />
          </div>
        </li>
      </ul>
    </nav>
  );
}
