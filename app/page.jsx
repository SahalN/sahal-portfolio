/** @format */

import Link from "next/link";
import { getFeaturedProject } from "../lib/projects";
import DownloadButton from "../components/DownloadButton";
import Transition from "../components/Transition";
import ThreeScene from "../components/ThreeScene";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Sahal Nurdin - HomePage",
};

export default async function HomePage() {
  const project = await getFeaturedProject();
  // console.log("[HomePage]");
  return (
    <>
      <Transition>
        <div className='flex flex-row justify-center gap-8 md:flex-col -z-20 '>
          <div className='flex flex-col justify-center text-left top-96'>
            <div className='py-4 bg-[#ffffffcc] dark:bg-[#ffffff5c] px-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-40 '>
              <p className='text-sm text-center '>
                Hello, I’m an fullstack app developer based in Indonesia!
              </p>
            </div>
            <div className='flex flex-row items-center justify-center mt-5'>
              <div>
                <Heading>Muhammad Sahal Nurdin</Heading>
                <p className='text-sm font-light text-left'>
                  Love to build Digital Things (Developer/3D
                  Generalist/Designer)
                </p>
              </div>
              <div>
                <img
                  src='/images/sahaln.png'
                  alt='foto-sahal'
                  className='w-24 border-2 border-white rounded-full '
                />
              </div>
            </div>

            <div className='mt-3'>
              <h2 className='text-lg font-bold underline font-plusJakartaSans decoration-4 '>
                About
              </h2>
              <p className='mt-2 font-light text-justify indent-4'>
                Sahal is a full-stack developer with a deep passion for building
                digital innovations. With a keen eye for detail and a knack for
                problem-solving, he brings creative ideas to life through code.
                Whether it's designing user-friendly interfaces or tackling
                complex backend challenges, Sahal's expertise shines through in
                every project. His dedication to crafting digital solutions that
                make a difference is what sets him apart in the world of
                technology. From front-end aesthetics to the intricacies of
                back-end functionality.
              </p>
            </div>
          </div>
        </div>

        {/* BIO */}
        <div>
          <div className='flex justify-center mt-5'>
            <DownloadButton />
          </div>
          <h2 className='mt-5 mb-2 text-lg font-bold underline font-plusJakartaSans decoration-4'>
            Bio
          </h2>
          <div className='flex space-x-2'>
            <span className='my-auto font-bold'>2003</span>
            <div>Born in Jakarta, Indonesia</div>
          </div>
          <div>
            <div className='flex items-start mt-2 space-x-2'>
              <span className='font-bold '>2025</span>
              <div>
                Completed a Bachelor's degree in Computer Science at Gunadarma
                University.
              </div>
            </div>
          </div>
          <div>
            <div className='flex mt-2 space-x-2'>
              <span className='my-auto font-bold'>2024</span>
              <div>Working as a freelancer developer</div>
            </div>
          </div>
        </div>
      </Transition>

      <Transition>
        <div className='mt-5 '>
          <div className='mt-5'>
            <h2 className='mt-5 mb-2 text-lg font-bold underline underline-offset-4 font-plusJakartaSans decoration-4 '>
              Hobby
            </h2>

            <p className='font-normal text-justify indent-4'>
              UI/UX Design, drawing,{" "}
              <a
                className='text-[#6d9886]'
                href='https://www.artstation.com/sahalnurdin'
                target='_blank'>
                3D Environment Design
              </a>
              , Listening to music, and Reading Books.
            </p>
          </div>
          <div className='mt-5 '>
            <h2 className='mb-2 text-lg font-bold underline font-plusJakartaSans decoration-4 underline-offset-4'>
              My Socials
            </h2>
            <ul className='text-[#6D9886] '>
              <li>
                <a
                  href='https://github.com/SahalN'
                  target='_blank'
                  className='flex items-center mb-2 gap-x-2'>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='#6D9886'
                      viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </div>
                  <div>sahaln</div>
                </a>
              </li>
              <li>
                <a
                  href='https://x.com/sahalnurdin_'
                  target='_blank'
                  className='flex items-center mb-2 gap-x-2'>
                  <div>
                    <svg
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='#6D9886'
                      viewBox='0 0 24 24'>
                      <path d='M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z' />
                    </svg>
                  </div>
                  <div>@sahalnurdin_</div>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/sahal.codes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  target='_blank'
                  className='flex items-center mb-2 gap-x-2'>
                  <div>
                    <svg
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='#6D9886'
                      viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        fillRule='evenodd'
                        d='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>@sahalnurdin_</div>
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/sahal.nurdin.58/?locale=id_ID'
                  target='_blank'
                  className='flex items-center mb-2 gap-x-2'>
                  <div>
                    <svg
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='#6D9886'
                      viewBox='0 0 24 24'>
                      <path
                        fill-rule='evenodd'
                        d='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>Sahal Nurdin</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Transition>

      <Transition>
        <div className='mt-5 '>
          <h2 className='mb-5 text-lg font-bold underline underline-offset-4 font-plusJakartaSans decoration-4'>
            My Recent Project
          </h2>
        </div>

        <div className='flex justify-center rounded'>
          <Link href={`/projects/${project.slug}`}>
            <img
              src={project.image}
              alt='ceritadesain'
              className='object-cover w-full h-auto rounded-xl'
            />

            <h2 className='py-1 font-normal text-center font-plusJakartaSans sm:px-2'>
              {project.title}
            </h2>
          </Link>
        </div>
      </Transition>

      <Transition>
        <div className='flex flex-col mt-4'>
          <div>
            <h2 className='mb-2 text-lg font-bold underline underline-offset-4 font-plusJakartaSans decoration-4'>
              Get in Touch
            </h2>
            <p className='mb-2 text-sm font-light text-justify indent-4'>
              I’d love to hear from you! Whether you have a question, a project
              idea, or just want to connect, drop me a message, and I’ll get
              back to you soon.
            </p>
          </div>

          <div class='gap-16  mx-auto max-w-4xl '>
            <ContactForm />
          </div>
        </div>
      </Transition>
    </>
  );
}
