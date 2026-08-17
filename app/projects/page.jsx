import Link from "next/link";
import { getProjects } from "../../lib/projects";
import Transition from "../../components/Transition";
import Heading from "../../components/Heading";
import ScrambleText from "../../components/ScrambleText";
import T from "../../components/T";
import Localized from "../../components/Localized";
import Image from "next/image";

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
            <Heading>
              <ScrambleText k='projects.title' />
            </Heading>
            <p className='text-sm font-light text-justify indent-4'>
              <T k='projects.intro' />
            </p>
          </div>
          <ul className='grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2'>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className='block group'>
                  <div className='overflow-hidden rounded-xl'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={416}
                      height={234}
                      sizes='(max-width: 640px) 100vw, 50vw'
                      className='object-cover w-full transition-transform duration-500 ease-out aspect-video motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105'
                      loading='lazy'
                    />
                  </div>
                  <p className='mt-2 text-[11px] font-medium tracking-widest text-gray-500 uppercase dark:text-gray-400'>
                    {project.date.slice(0, 4)}
                  </p>
                  <h2 className='text-sm font-normal transition-colors font-plusJakartaSans group-hover:text-[#6d9886] group-focus-visible:text-[#6d9886]'>
                    <Localized values={project.titles} />
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
