/** @format */

import Link from "next/link";
import Heading from "../../components/Heading";
import { getProjects } from "../../lib/projects";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  // console.log(projects);
  return (
    <>
      <Heading>Projects</Heading>
      <ul className='flex justify-between gap-3 md:flexcol'>
        {projects.map((project) => (
          <li
            key={project.slug}
            className='bg-white border rounded shadow w-80 hover:shadow-xl'>
            <Link href={`/projects/${project.slug}`}>
              <img
                src={project.image}
                alt='ceritadesain'
                width='320'
                height='180'
                className='mb-2 rounded'
              />
              <h2 className='py-1 font-semibold text-center font-plusJakartaSans'>
                {project.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
