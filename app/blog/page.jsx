import Image from "next/image";
import Heading from "../../components/Heading";
import Transition from "../../components/Transition";

export const metadata = {
  title: "Blogs",
};

export default function Blog() {
  return (
    <>
      <Transition>
        <div>
          <div className='mb-2'>
            <div>
              <Heading>My Blogs</Heading>
            </div>
            <div className='mb-5'>
              <p className='text-sm font-light text-justify indent-4'>
                This page is dedicated to my personal blog, where I discuss
                various topics related to programming, UI/UX design, and my
                learning experiences during university. Explore detailed posts,
                tutorials, and reflections on the methods and techniques I use
                in my work and studies.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 justify-items-stretch'>
            <div>
              <a href='https://medium.com/@sahalnurdin' target='_blank'>
                <Image
                  src='/images/sahal-medium.png'
                  alt='sahal-medium-image'
                   width={208}
                   height={112}
                  className='object-cover mx-auto mb-2 h-28 w-52 rounded-xl '
                />
                <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                  Sahal's Programming Blog on Medium
                </h2>
              </a>
            </div>
            <div>
              <a
                href='https://muhammadsahalnurdin.blogspot.com/'
                target='_blank'>
                <Image
                  src='/images/sahal-blogger.png'
                  alt='sahal-blogger-image'
                  width={208}
                  height={112}
                  className='object-cover mx-auto mb-2 h-28 w-52 rounded-xl '
                />
                <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                  Sahal's University Journey Blog
                </h2>
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/sahal.codes/ ' target='_blank'>
                <Image
                  src='/images/instagram-blog.png'
                  alt='sahal-instagram-image'
                  width={208}
                  height={112}
                  className='object-cover mx-auto mb-2 h-28 w-52 rounded-xl'
                />
                <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                  Sahal's Instagram Coding Blog
                </h2>
              </a>
            </div>
            <div>
              <a href='https://sahaluiux.site/' target='_blank'>
                <Image
                  src='/images/sahal-uiux.png'
                  alt='sahal-uiux-image'
                  width={208}
                  height={112}
                  className='object-cover mx-auto mb-2 h-28 w-52 rounded-xl '
                />
                <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white '>
                  Sahal's UI and UX Blog Reviews
                </h2>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
