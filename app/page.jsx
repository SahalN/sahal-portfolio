/** @format */

import Link from "next/link";
import Heading from "../components/Heading";
import { getFeaturedProject } from "../lib/projects";

export const metadata = {
  title: "Sahal's Portfolio"
}


export default async function HomePage() {
  const project = await getFeaturedProject();
  console.log("[HomePage]");
  return (
    <>
      <Heading>Sahal's Portfolio</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dicta
        natus ea eum exercitationem commodi perferendis vel recusandae placeat
        odio, officia, dolores at! Necessitatibus ipsum, nulla nobis rem commodi
        iure.
      </p>
      <div className='bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full'>
        <Link href={`/projects/${project.slug}`} className='flex flex-col md:flex-row'>
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
