/** @format */

import Link from "next/link";
import Heading from "../components/Heading";
import { getFeaturedProject } from "../lib/projects";

export const metadata = {
  title: "Sahal's Portfolio",
};

export default async function HomePage() {
  const project = await getFeaturedProject();
  console.log("[HomePage]");
  return (
    <>
      <div className='flex flex-col justify-center gap-8 my-6 md:flex-row'>
        <div className='flex flex-col justify-center flex-1 text-left '>
          <h1 className='text-6xl font-extrabold text-gray-700 '>
            Welcome to my Web Development Portofolio!
          </h1>

          <p className='py-2 text-xl font-normal text-gray-400'>
            I'm Sahal Nurdin, a passionate web developer based in Indonesia.
            Here, you'll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
        </div>
        <div className='flex justify-center flex-1'>
          <img
            src='/images/sahal.png'
            alt='foto-sahal'
            className='w-[600px] rounded-xl'
          />
        </div>
      </div>

      <div className='bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full'>
        <Link
          href={`/projects/${project.slug}`}
          className='flex flex-col md:flex-row'>
          <img
            src={project.image}
            alt='ceritadesain'
            width='320'
            height='180'
            className='rounded-t sm:rounded-l sm:rounded-t-none'
          />
          <h2 className='py-1 font-semibold text-center font-plusJakartaSans sm:px-2'>
            {project.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
