/** @format */

import Heading from "../../components/Heading";
import Transition from "../../components/Transition";

export const metadata = {
  title: "Blogs",
};

export default function Blog() {
  return (
    <>
      <Transition>
        <div className='mb-2 '>
          <div>
            <Heading>My Blogs</Heading>
          </div>
          <div className='mb-5'>
            <p className='text-sm font-light text-justify '>
              This page is dedicated to my personal blog, where I discuss
              various topics related to programming, UI/UX design, and my
              learning experiences during university. Explore detailed posts,
              tutorials, and reflections on the methods and techniques I use in
              my work and studies.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 justify-items-stretch'>
          <div>
            <a href='https://medium.com/@sahalnurdin' target='_blank'>
              <img
                src='/images/sahal-medium.png'
                alt='sahal-medium-image'
                className='mx-auto mb-2 h-44 rounded-xl w-80'
              />

              <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                Sahal's Programming Blog on Medium
              </h2>
              <p className='text-sm font-light text-center'>
                A blog on Medium that shares insights and tutorials on
                programming, offering valuable content to help readers
                understand coding concepts and enhance their skills.
              </p>
            </a>
          </div>
          <div>
            <a href='https://muhammadsahalnurdin.blogspot.com/' target='_blank'>
              <img
                src='/images/sahal-blogger.png'
                alt='sahal-blogger-image'
                className='mx-auto mb-2 h-44 rounded-xl w-80'
              />
              <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                Sahal's University Journey Blog
              </h2>
              <p className='text-sm font-light text-center'>
                A blog on Blogger that chronicles activities and learning
                experiences during university, offering insights into the
                academic journey and personal growth throughout the college
                years.
              </p>
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/sahal.codes/ ' target='_blank'>
              <img
                src='/images/instagram-blog.png'
                alt='sahal-instagram-image'
                className='mx-auto mb-2 h-44 rounded-xl w-80'
              />
              <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                Sahal's Instagram Coding Blog
              </h2>
              <p className='text-sm font-light text-center'>
                An Instagram account dedicated to sharing web programming
                tutorials, offering practical guides and tips to help followers
                enhance their coding skills.
              </p>
            </a>
          </div>
          <div>
            <a href='https://sahaluiux.site/' target='_blank'>
              <img
                src='/images/sahal-uiux.png'
                alt='sahal-uiux-image'
                className='mx-auto mb-2 h-44 rounded-xl w-80'
              />
              <h2 className='py-1 font-normal text-center text-black font-plusJakartaSans dark:text-white'>
                Sahal's UI/UX Blog Reviews
              </h2>
              <p className='text-sm font-light text-center'>
                Sahalnuiux is a website dedicated to sharing insights on how
                UI/UX designs are created, offering a detailed look into design
                techniques, processes, and workflows.
              </p>
            </a>
          </div>
        </div>
      </Transition>
    </>
  );
}
