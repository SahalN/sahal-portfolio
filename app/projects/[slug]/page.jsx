import Heading from "../../../components/Heading";
import ShareLinkButton from "../../../components/ShareLinkButton";
import Localized, { LocalizedHtml } from "../../../components/Localized";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, getSlugs } from "../../../lib/projects";

// Only the slugs from generateStaticParams are servable; anything else 404s
// without ever hitting the filesystem.
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  return {
    title: project?.title ?? "Project Not Found",
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  return (
    <>
      <div className='max-w-screen-sm mx-auto'>
        <Heading>
          <Localized values={project.titles} />
        </Heading>
        <div className='flex items-center gap-3 mt-2'>
          <p className='italic'>{project.date}</p>
          <ShareLinkButton />
        </div>
        <div className='mt-2'>
         <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={360}
          className='object-cover w-full h-auto mx-auto mt-5 mb-5 transition duration-300 ease-in-out delay-150 rounded-xl sm:aspect-video hover:-translate-y-1 hover:scale-110'
          priority
        />
        </div>
        <LocalizedHtml
          values={project.bodies}
          className='max-w-screen-sm prose text-left prose-slate dark:prose-invert'
        />
      </div>
    </>
  );
}
