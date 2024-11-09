/** @format */

// pages/projects.js

import Link from "next/link";
import { getProjects } from "../../lib/projects";
import Transition from "../../components/Transition";
import Heading from "../../components/Heading";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <Transition>
        <div>
          <div className='mb-5'>
            <Heading>Projects</Heading>
            <p className='text-sm font-light text-justify indent-4'>
              Explore my latest projects, where creativity meets functionality.
              Each project reflects my dedication to quality and my passion for
              bringing ideas to life.
            </p>
          </div>
          <div>
            <ul className='grid grid-cols-2 gap-4 justify-items-stretch'>
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/projects/${project.slug}`}>
                    <img
                      src={project.image}
                      alt='ceritadesain'
                      className='object-cover mx-auto mb-2 w-52 h-28 rounded-xl '
                    />
                    <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                      {project.title}
                    </h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Transition>
    </>
  );
}
