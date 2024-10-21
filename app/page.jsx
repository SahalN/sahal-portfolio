/** @format */

import Link from "next/link";
import Heading from "../components/Heading";
import { getFeaturedProject } from "../lib/projects";
import DownloadButton from "../components/DownloadButton";

export const metadata = {
  title: "Sahal's Portfolio",
};

export default async function HomePage() {
  const project = await getFeaturedProject();
  // console.log("[HomePage]");
  return (
    <>
      <div className='flex flex-col justify-center gap-8 my-6 md:flex-row'>
        <div className='flex flex-col justify-center flex-1 text-left '>
          <h1 className='text-6xl font-extrabold text-gray-700 '>
            Welcome to my Web Development Portofolio!
          </h1>

          <p className='py-2 text-xl font-normal text-gray-400'>
            I'm Sahal Nurdin, a passionate web developer based in Indonesia.
            Here, you'll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
        </div>
        <div className='flex justify-center flex-1'>
          <img
            src='/images/sahal.png'
            alt='foto-sahal'
            className='w-[600px] rounded-xl'
          />
        </div>
      </div>

      <div className='flex flex-row items-center justify-center py-20 md:flex-col'>
        <div className='flex-1'>
          <h2 className='text-lg font-semibold text-black'>MY SKILLS</h2>
        </div>
        <div>
          <h1 className='text-6xl font-bold text-black'>What I do</h1>
        </div>
        <div>
          <p className='text-2xl font-semibold text-center text-gray-500'>
            I'm not just a developer; I'm a digital dreamweaver. Crafting
            immersive online experiences is not just a job but my calling.
            Discover below how I can help you.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 py-6 gap-36'>
        <div className='text-center justify-self-center'>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black'>
              Frontend Web Development:
            </h3>
          </div>
          <div>
            <p className='text-gray-500'>
              Creating beautiful and functional web experiences is my forte.
              Using the latest technologies and best practices, I design and
              build websites that captivate and engage users.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black'>
              Mobile App Development
            </h3>
          </div>
          <div>
            <p className='text-gray-500'>
              I specialize in creating responsive and intuitive mobile apps that
              work seamlessly across iOS & Android devices. From concept to
              deployment, I handle every stage of the development process.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black'>Technology Stack</h3>
          </div>
          <div>
            <p className='text-gray-500'>
              I'm well-versed in the industry's most popular frontend
              technologies, including HTML5, CSS3, JavaScript, and frameworks
              like React and React Native.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black'>Web Optimization</h3>
          </div>
          <div>
            <p className='text-gray-500'>
              Performance matters. I optimize websites and apps for speed,
              ensuring your users enjoy a fast and responsive experience, which
              in turn boosts user satisfaction and SEO rankings.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black'>
              User-Centric Design
            </h3>
          </div>
          <div>
            <p className='text-gray-500'>
              My development goes hand-in-hand with an eye for design. I create
              user interfaces that are not only functional but also
              aesthetically pleasing, providing a seamless and enjoyable user
              journey.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black'>
              Testing and Quality Assurance
            </h3>
          </div>
          <div>
            <p className='text-gray-500'>
              I rigorously test and debug applications to guarantee a bug-free
              and secure environment for users. Your peace of mind is as
              important to me as the functionality of your project.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center gap-3 py-6 md:flex-col'>
        <div>
          <h1 className='text-3xl font-bold text-black'>My Recent Projects</h1>
        </div>
        <div>
          <p className='text-gray-500'>
            Whether you have a mobile app idea that needs to come to life or a
            website that requires a facelift, I'm here to turn your digital
            dreams into reality.
          </p>
        </div>
        <div className='flex justify-between gap-36'>
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <Link href={`/projects/${project.slug}`}>
              <img class='rounded-t-lg' src={project.image} alt='' />
            </Link>
            <div class='p-5'>
              <Link href={`/projects/${project.slug}`}>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {project.title}
                </h5>
              </Link>
              <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href={`/projects/${project.slug}`}
                class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Read more
                <svg
                  class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'>
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <Link href={`/projects/${project.slug}`}>
              <img class='rounded-t-lg' src={project.image} alt='' />
            </Link>
            <div class='p-5'>
              <Link href={`/projects/${project.slug}`}>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {project.title}
                </h5>
              </Link>
              <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href={`/projects/${project.slug}`}
                class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Read more
                <svg
                  class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'>
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <Link href={`/projects/${project.slug}`}>
              <img class='rounded-t-lg' src={project.image} alt='' />
            </Link>
            <div class='p-5'>
              <Link href={`/projects/${project.slug}`}>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {project.title}
                </h5>
              </Link>
              <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href={`/projects/${project.slug}`}
                class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Read more
                <svg
                  class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'>
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center md:flex-col'>
          <div>
            <Link href='/projects'>
              <h1>See All Projects</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className='bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full'>
        <Link
          href={`/projects/${project.slug}`}
          className='flex flex-col md:flex-row'>
          <img
            src={project.image}
            alt='ceritadesain'
            width='320'
            height='180'
            className='rounded-t sm:rounded-l sm:rounded-t-none'
          />
          <h2 className='py-1 font-semibold text-center font-plusJakartaSans sm:px-2'>
            {project.title}
          </h2>
        </Link>
      </div> */}

      <div className='flex flex-col items-center justify-between my-6 md:flex-row'>
        <div className='flex-1 text-left '>
          <div>
            <h2 className='text-2xl font-bold text-black'>My Resume</h2>
          </div>
          <div>
            <p className='text-gray-500'>
              Highly skilled and creative Web Developer with 5+ years of
              experience in crafting visually stunning and functionally robust
              websites and web applications.
            </p>
          </div>
          <div className='mt-3'>
            <DownloadButton />
          </div>
        </div>
        <div className='flex flex-1'>
          <div className='grid grid-rows-3'>
            <div className='flex flex-col md:flex-row'>
              <div>
                <img src='' alt='logo' />
              </div>
              <div>
                <p className='text-gray-500'>
                  Bachelor of Science in Computer Science
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div>
                <img src='' alt='logo' />
              </div>
              <div>
                <p className='text-gray-500'>Certified Web Developer</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div>
                <img src='' alt='logo' />
              </div>
              <div>
                <p className='text-gray-500'>
                  Frontend Framework Proficiency Certification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center md:flex-col'>
        <div>
          <h2 className='text-3xl font-semibold '>Contact Me</h2>
        </div>
        <div>
          <p className='text-gray-500'>
            Ready to get started? Feel free to reach out through the contact
            form, and let's embark on a journey of innovation and success.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}
