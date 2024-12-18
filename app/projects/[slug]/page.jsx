/** @format */

import Heading from "../../../components/Heading";
import ShareLinkButton from "../../../components/ShareLinkButton";
import { getProject, getSlugs } from "../../../lib/projects";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const project = await getProject(slug);
  console.log(project);
  return {
    title: project.title,
  };
}

export default async function ProjectPage({ params: { slug } }) {
  const project = await getProject(slug);
  console.log("[ProjectPage] rendering", slug);

  return (
    <>
      <div className='max-w-screen-sm mx-auto '>
        <Heading>{project.title}</Heading>

        <div className='flex items-center gap-3 mt-2'>
          <p className='italic'>{project.date}</p>
          <ShareLinkButton />
        </div>

        {/* <iframe
          src='https://www.youtube.com/'
          className='mx-auto mt-5 mb-5 rounded aspect-auto sm:aspect-video w-[320px] h-[180px] sm:w-[640px] sm:h-[360px]'
          sandbox='allow-scripts allow-same-origin' // use with caution
        /> */}
        <div className='mt-2'>
          <img
            src={project.image}
            alt={project.title}
            width='640'
            height='360'
            className='object-cover w-full h-auto mx-auto mt-5 mb-5 transition duration-300 ease-in-out delay-150 rounded-xl sm:aspect-video hover:-translate-y-1 hover:scale-110'
          />
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: project.body }}
          className='max-w-screen-sm prose text-left prose-slate dark:prose-invert'></article>
      </div>
    </>
  );
}
