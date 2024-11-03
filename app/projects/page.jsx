/** @format */

// pages/projects.js

import Link from "next/link";
import { getProjects } from "../../lib/projects";
import Transition from "../../components/Transition";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <Transition>
        <div className='px-32'>
          <div className='mb-2'>
            <h2 className='text-lg font-bold underline font-plusJakartaSans decoration-4 underline-offset-4'>
              Projects
            </h2>
          </div>
          <ul className='grid grid-cols-2 gap-4 justify-items-stretch'>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <img
                    src={project.image}
                    alt='ceritadesain'
                    className='w-full mb-2 rounded-xl '
                  />
                  <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                    {project.title}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </>
  );
}
