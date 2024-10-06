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
  }
  
}

export default async function ProjectPage({ params: { slug } }) {
  // console.log(props);
  const project = await getProject(slug);
  console.log("[ProjectPage] rendering", slug);
  // console.log(project);
  return (
    <>
      <Heading>{project.title}</Heading>
      
      <div className="flex items-baseline gap-3"><p className="pb-2 italic">{project.date}</p><ShareLinkButton/></div>
      
      <img
        src={project.image}
        alt='ceritadesain'
        width='640'
        height='360'
        className='mb-2 rounded'
      />
     
      <article dangerouslySetInnerHTML={{ __html: project.body }} className="max-w-screen-sm prose prose-slate"></article>
    </>
  );
}
