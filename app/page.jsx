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
      <div className='flex flex-col justify-center gap-8 my-32 md:flex-row'>
        <div className='flex flex-col justify-center flex-1 text-left '>
          <h1 className='text-6xl font-extrabold text-gray-700 dark:text-white'>
            Welcome to my Web Development Portofolio!
          </h1>

          <p className='py-2 text-xl font-normal text-gray-400 dark:text-gray-100'>
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

      <div className='flex flex-row items-center justify-center my-32 md:flex-col'>
        <div className='flex-1'>
          <h2 className='text-lg font-semibold dark:text-white'>MY SKILLS</h2>
        </div>
        <div>
          <h1 className='py-3 text-6xl font-bold dark:text-white'>What I do</h1>
        </div>
        <div>
          <p className='py-3 text-2xl font-semibold text-center text-gray-500 dark:text-gray-100'>
            I'm not just a developer; I'm a digital dreamweaver. Crafting
            immersive online experiences is not just a job but my calling.
            Discover below how I can help you.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 my-32 gap-36'>
        <div className='text-center justify-self-center'>
          <div className='flex items-center justify-center'>
            <img
              src='images/fluent_design-ideas-32-filled.png'
              alt=''
              className='w-8'
            />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black dark:text-white'>
              Frontend Web Development
            </h3>
          </div>
          <div>
            <p className='text-gray-500 dark:text-gray-100'>
              Creating beautiful and functional web experiences is my forte.
              Using the latest technologies and best practices, I design and
              build websites that captivate and engage users.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div className='flex items-center justify-center'>
            <img
              src='images/carbon_application-mobile.png'
              alt=''
              className='w-8'
            />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black dark:text-white'>
              Mobile App Development
            </h3>
          </div>
          <div>
            <p className='text-gray-500 dark:text-gray-100'>
              I specialize in creating responsive and intuitive mobile apps that
              work seamlessly across iOS & Android devices. From concept to
              deployment, I handle every stage of the development process.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div className='flex items-center justify-center'>
            <img
              src='images/uil_programming-language.png'
              alt=''
              className='w-8'
            />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black dark:text-white'>
              Technology Stack
            </h3>
          </div>
          <div>
            <p className='text-gray-500 dark:text-gray-100'>
              I'm well-versed in the industry's most popular frontend
              technologies, including HTML5, CSS3, JavaScript, and frameworks
              like React and React Native.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div className='flex items-center justify-center'>
            <img
              src='images/icon-park-outline_smart-optimization.png'
              alt=''
              className='w-8'
            />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black dark:text-white'>
              Web Optimization
            </h3>
          </div>
          <div>
            <p className='text-gray-500 dark:text-gray-100'>
              Performance matters. I optimize websites and apps for speed,
              ensuring your users enjoy a fast and responsive experience, which
              in turn boosts user satisfaction and SEO rankings.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div className='flex items-center justify-center'>
            <img
              src='images/fluent_design-ideas-32-filled.png'
              alt=''
              className='w-8'
            />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black dark:text-white'>
              User-Centric Design
            </h3>
          </div>
          <div>
            <p className='text-gray-500 dark:text-gray-100'>
              My development goes hand-in-hand with an eye for design. I create
              user interfaces that are not only functional but also
              aesthetically pleasing, providing a seamless and enjoyable user
              journey.
            </p>
          </div>
        </div>
        <div className='text-center justify-self-center'>
          <div className='flex items-center justify-center'>
            <img src='images/mingcute_bug-fill.png' alt='' className='w-8' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-black dark:text-white'>
              Testing and Quality Assurance
            </h3>
          </div>
          <div>
            <p className='text-gray-500 dark:text-gray-100'>
              I rigorously test and debug applications to guarantee a bug-free
              and secure environment for users. Your peace of mind is as
              important to me as the functionality of your project.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center gap-3 my-32 md:flex-col'>
        <div className='pb-1'>
          <h1 className='text-3xl font-bold text-black dark:text-white'>
            My Recent Projects
          </h1>
        </div>
        <div>
          <p className='pb-8 text-gray-500 dark:text-gray-100'>
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
          <div className='mt-5 animate-bounce '>
            <Link href='/projects'>
              <p className='text-gray-700 dark:text-white'>See All Projects</p>
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

      <div className='flex flex-col items-center justify-between my-32 md:flex-row'>
        <div className='flex-1 text-left '>
          <div>
            <h2 className='text-2xl font-bold text-black dark:text-white'>
              My Resume
            </h2>
          </div>
          <div>
            <p className='text-gray-500 dark:text-gray-100'>
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
            <div className='flex flex-col gap-2 md:flex-row'>
              <div>
                <img src='images/univ.png' alt='logo' className='w-8' />
              </div>
              <div>
                <p className='text-gray-500 dark:text-gray-100'>
                  Bachelor of Science in Computer Science
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div>
                <img src='images/cert1.png' alt='logo' className='w-8' />
              </div>
              <div>
                <p className='text-gray-500 dark:text-gray-100'>
                  Certified Web Developer
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div>
                <img src='images/cert2.png' alt='logo' className='w-8' />
              </div>
              <div>
                <p className='text-gray-500 dark:text-gray-100'>
                  Frontend Framework Proficiency Certification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center my-32 md:flex-col'>
        <div className='py-3'>
          <h2 className='text-3xl font-semibold '>Contact Me</h2>
        </div>
        <div className='mb-2'>
          <p className='text-gray-500 dark:text-gray-100'>
            Ready to get started? Feel free to reach out through the contact
            form, and let's embark on a journey of innovation and success.
          </p>
        </div>

        <div class='grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white dark:bg-gray-800   font-[sans-serif] rounded-xl'>
          <div>
            <h1 class='text-gray-800 text-3xl font-extrabold dark:text-white'>
              Let's Talk
            </h1>
            <p class='text-sm text-gray-500 mt-4 dark:text-gray-200'>
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help.
            </p>
            <div class='mt-12'>
              <h2 class='text-gray-800 text-base font-bold dark:text-white'>
                Email
              </h2>
              <ul class='mt-4'>
                <li class='flex items-center'>
                  <div class='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20px'
                      height='20px'
                      fill='#007bff'
                      viewBox='0 0 479.058 479.058'>
                      <path
                        d='M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z'
                        data-original='#000000'
                      />
                    </svg>
                  </div>
                  <a
                    href='javascript:void(0)'
                    class='text-gray-500 text-sm ml-4 dark:text-white'>
                    <small class='block'>Mail</small>
                    <strong>sahalnurdin@gmail.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div class='mt-12'>
              <h2 class='text-gray-800 text-base font-bold'>Socials</h2>

              <ul class='flex mt-4 space-x-4'>
                <li class='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                  <a href='javascript:void(0)'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20px'
                      height='20px'
                      fill='#007bff'
                      viewBox='0 0 24 24'>
                      <path
                        d='M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z'
                        data-original='#000000'
                      />
                    </svg>
                  </a>
                </li>
                <li class='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                  <a href='javascript:void(0)'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20px'
                      height='20px'
                      fill='#007bff'
                      viewBox='0 0 511 512'>
                      <path
                        d='M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0'
                        data-original='#000000'
                      />
                    </svg>
                  </a>
                </li>
                <li class='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                  <a href='javascript:void(0)'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20px'
                      height='20px'
                      fill='#007bff'
                      viewBox='0 0 24 24'>
                      <path d='M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z'></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form class='ml-auto space-y-4'>
            <input
              type='text'
              placeholder='Name'
              class='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
            />
            <input
              type='email'
              placeholder='Email'
              class='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
            />
            <input
              type='text'
              placeholder='Subject'
              class='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
            />
            <textarea
              placeholder='Message'
              rows='6'
              class='w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent'></textarea>
            <button
              type='button'
              class='text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6'>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
