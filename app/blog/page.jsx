import Image from "next/image";
import Heading from "../../components/Heading";
import Transition from "../../components/Transition";
import ScrambleText from "../../components/ScrambleText";
import T from "../../components/T";

export const metadata = {
  title: "Blogs",
};

const BLOGS = [
  {
    key: "blog.medium",
    platform: "Medium",
    href: "https://medium.com/@sahalnurdin",
    image: "/images/sahal-medium.png",
    alt: "sahal-medium-image",
  },
  {
    key: "blog.university",
    platform: "Blogspot",
    href: "https://muhammadsahalnurdin.blogspot.com/",
    image: "/images/sahal-blogger.png",
    alt: "sahal-blogger-image",
  },
  {
    key: "blog.instagram",
    platform: "Instagram",
    href: "https://www.instagram.com/sahal.codes/",
    image: "/images/instagram-blog.png",
    alt: "sahal-instagram-image",
  },
  
];

export default function Blog() {
  return (
    <>
      <Transition>
        <div>
          <div className='mb-5'>
            <Heading>
              <ScrambleText k='blog.title' />
            </Heading>
            <p className='text-sm font-light text-justify indent-4'>
              <T k='blog.intro' />
            </p>
          </div>
          <ul className='grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2'>
            {BLOGS.map((blog) => (
              <li key={blog.href}>
                <a
                  href={blog.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block group'>
                  <div className='overflow-hidden rounded-xl'>
                    <Image
                      src={blog.image}
                      alt={blog.alt}
                      width={416}
                      height={234}
                      sizes='(max-width: 640px) 100vw, 50vw'
                      className='object-cover w-full transition-transform duration-500 ease-out aspect-video motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105'
                      loading='lazy'
                    />
                  </div>
                  <p className='mt-2 text-[11px] font-medium tracking-widest text-gray-500 uppercase dark:text-gray-400'>
                    {blog.platform}
                  </p>
                  <h2 className='text-sm font-normal transition-colors font-plusJakartaSans group-hover:text-[#6d9886] group-focus-visible:text-[#6d9886]'>
                    <T k={blog.key} />
                    <span aria-hidden='true' className='ml-1'>
                      ↗
                    </span>
                  </h2>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </>
  );
}
