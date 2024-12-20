/** @format */

import Heading from "../../../components/Heading";
import ShareLinkButton from "../../../components/ShareLinkButton";
import Image from "next/image"; // Import komponen next/image
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
      <div className='max-w-screen-sm mx-auto'>
        <Heading>{project.title}</Heading>

        <div className='flex items-center gap-3 mt-2'>
          <p className='italic'>{project.date}</p>
          <ShareLinkButton />
        </div>

        {/* Optimized Image Section */}
        <div className='mt-2'>
          <Image
            src={project.image}
            alt={project.title}
            width={640} // Lebar default
            height={360} // Tinggi default
            className='object-cover w-full h-auto mx-auto mt-5 mb-5 transition duration-300 ease-in-out delay-150 rounded-xl sm:aspect-video hover:-translate-y-1 hover:scale-110'
            placeholder='blur' // Placeholder blur
            blurDataURL='/placeholder.jpg' // Tambahkan placeholder base64 (opsional)
            priority // Gambar utama dimuat lebih awal
          />
        </div>

        <article
          dangerouslySetInnerHTML={{ __html: project.body }}
          className='max-w-screen-sm prose text-left prose-slate dark:prose-invert'></article>
      </div>
    </>
  );
}
