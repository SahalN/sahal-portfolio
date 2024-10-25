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
  // console.log(props);
  const project = await getProject(slug);
  console.log("[ProjectPage] rendering", slug);
  // console.log(project);
  return (
    <>
      <div className='max-w-screen-sm mx-auto '>
        <Heading>{project.title}</Heading>

        <div className='flex items-baseline gap-3'>
          <p className='pb-2 italic'>{project.date}</p>
          <ShareLinkButton />
        </div>
        <img
          src={project.image}
          alt='ceritadesain'
          width='640'
          height='360'
          className='mx-auto mt-5 mb-5 rounded aspect-auto sm:aspect-video w-[320px] h-[180px] sm:w-[640px] sm:h-[360px] '
        />
        <article
          dangerouslySetInnerHTML={{ __html: project.body }}
          className='max-w-screen-sm prose text-justify prose-slate'></article>
      </div>
    </>
  );
}
