import Link from "next/link";
import { getFeaturedProject } from "../lib/projects";
import DownloadButton from "../components/DownloadButton";
import Transition from "../components/Transition";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "Sahal Nurdin - HomePage",
};

export default async function HomePage() {
  const project = await getFeaturedProject();
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
                  Love to build Digital Things (Developer/3D Generalist/UI
                  Designer)
                </p>
              </div>
              <div>
                <Image
                  src='/images/sahaln.png'
                  alt='foto-sahal'
                  width={96}
                  height={96}
                  className='w-24 border-2 border-white rounded-full'
                  priority
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
        </div>
      </Transition>

      <Transition>
        <div className='mt-5 '>
          <div className='mt-5'>
            <h2 className='mt-5 mb-2 text-lg font-bold underline underline-offset-4 font-plusJakartaSans decoration-4 '>
              Hobby
            </h2>
            <p className='font-normal text-justify indent-4'>
              UI/UX design, drawing,{" "}
              <a
                className='text-[#6d9886]'
                href='https://www.artstation.com/sahalnurdin'
                target='_blank'>
                3D environment design
              </a>
              , listening to music, and reading books.
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
                    <FaGithub />
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
                    <FaXTwitter />
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
                    <FaInstagram />
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
                    <FaFacebook />
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
            <Image
              src={project.image}
              alt='ceritadesain'
              width={208}
              height={112}
              className='object-cover w-full h-auto rounded-xl'
              sizes="(max-width: 768px) 100vw, 800px"
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
          <div className='max-w-4xl gap-16 mx-auto '>
            <ContactForm />
          </div>
        </div>
      </Transition>
    </>
  );
}
