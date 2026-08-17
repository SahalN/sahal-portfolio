import Link from "next/link";
import { getFeaturedProject } from "../lib/projects";
import {
  certifications,
  getFeaturedCertifications,
} from "../lib/certifications";
import Transition from "../components/Transition";
import Heading from "../components/Heading";
import RotatingRoles from "../components/RotatingRoles";
import Typewriter from "../components/Typewriter";
import ScrambleText from "../components/ScrambleText";
import T from "../components/T";
import Localized from "../components/Localized";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import {
  SiAngular,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGo,
  SiGooglecloud,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";
import Image from "next/image";

export const metadata = {
  title: "Sahal Nurdin - HomePage",
};

// Names are proper nouns, so they stay identical in both languages.
const TECH_STACK = [
  { name: "Golang", Icon: SiGo },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Angular", Icon: SiAngular },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Three.js", Icon: SiThreedotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Laravel", Icon: SiLaravel },
  { name: "Kotlin", Icon: SiKotlin },
  { name: "Python", Icon: SiPython },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Firestore", Icon: SiFirebase },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "Git", Icon: SiGit },
];

export default async function HomePage() {
  const project = await getFeaturedProject();
  const featuredCertifications = getFeaturedCertifications();
  return (
    <>
      <Transition>
        <div className='flex flex-row justify-center gap-8 md:flex-col -z-20 '>
          <div className='flex flex-col justify-center text-left top-96'>
            {/* The bubble and the row below share one centred, content-width
                column, so the tail can sit exactly over the photo. */}
            <div className='max-w-full mx-auto w-fit'>
              <Reveal
                from='pop'
                delay={0.1}
                className='relative px-8 py-4 border shadow-lg rounded-2xl border-white/50 dark:border-white/15 bg-white/30 dark:bg-white/10 backdrop-blur-2xl backdrop-saturate-150 shadow-black/10'>
                <p className='text-sm text-center '>
                  <Typewriter k='home.hero' />
                </p>
                {/* Bubble tail, centred on the photo below it. The rotated
                    square is clipped to the part that sticks out: left whole,
                    its top half ghosts through the translucent bubble as a
                    floating diamond. */}
                <span
                  aria-hidden='true'
                  className='absolute overflow-hidden left-[38px] top-full h-2.5 w-5'>
                  <span className='block w-3.5 h-3.5 mx-auto -mt-[7px] rotate-45 bg-white/30 dark:bg-white/10 backdrop-blur-2xl backdrop-saturate-150' />
                </span>
              </Reveal>
              <div className='flex flex-row items-center gap-4 mt-5'>
                <Reveal from='left' delay={0.35} className='shrink-0'>
                  <Image
                    src='/images/sahaln.png'
                    alt='foto-sahal'
                    width={96}
                    height={96}
                    className='w-24 border-2 border-white rounded-full'
                    priority
                  />
                </Reveal>
                <Reveal from='right' delay={0.35} className='min-w-0'>
                  <Heading>
                    <ScrambleText text='Muhammad Sahal Nurdin' />
                  </Heading>
                  <p className='text-sm font-light text-left'>
                    <T k='home.tagline' />
                    <span className='block'>
                      <RotatingRoles
                        roleKeys={[
                          "home.role.developer",
                          "home.role.3d",
                          "home.role.ui",
                        ]}
                      />
                    </span>
                  </p>
                </Reveal>
              </div>
            </div>
            <div className='mt-3'>
              <h2 className='text-lg font-bold font-plusJakartaSans'>
                <ScrambleText
                  k='home.about.title'
                  className='border-b-4 border-current'
                />
              </h2>
              <p className='mt-2 font-light text-justify indent-4'>
                <T k='home.about.body' />
              </p>
            </div>
            <div className='mt-5'>
              <h2 className='mb-3 text-lg font-bold font-plusJakartaSans'>
                <ScrambleText
                  k='home.stack.title'
                  className='border-b-4 border-current'
                />
              </h2>
              <ul className='flex flex-wrap gap-2'>
                {TECH_STACK.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className='flex items-center gap-1.5 px-2.5 py-1 text-xs border rounded-full border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/5'>
                    <Icon aria-hidden='true' className='text-sm' />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className='mt-5 mb-2 text-lg font-bold font-plusJakartaSans'>
            <ScrambleText
              k='home.experience.title'
              className='border-b-4 border-current'
            />
          </h2>
          {/* Add the company name here once you want it public, e.g.
              <span className='text-gray-500'> · Company Name</span> */}
          <div className='flex flex-wrap items-baseline gap-x-3'>
            <p className='font-bold'>
              <T k='home.experience.role' />
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              <T k='home.experience.period' />
            </p>
          </div>
          <p className='mt-1 font-light text-justify'>
            <T k='home.experience.body' />
          </p>
          {featuredCertifications.length > 0 && (
            <>
              <h2 className='mt-5 mb-2 text-lg font-bold font-plusJakartaSans'>
                <ScrambleText
                  k='home.certs.title'
                  className='border-b-4 border-current'
                />
              </h2>
              <ul className='space-y-1'>
                {featuredCertifications.map((item) => (
                  <li
                    key={`${item.name}-${item.year}`}
                    className='flex items-baseline gap-3 text-sm'>
                    <span className='w-10 font-bold shrink-0'>{item.year}</span>
                    <span className='font-light'>
                      {item.name}
                      <span className='text-gray-500 dark:text-gray-400'>
                        {" · "}
                        {item.issuer}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href='/certifications'
                className='inline-block mt-2 text-sm text-[#6d9886] hover:underline'>
                <T k='home.certs.all' /> ({certifications.length}) →
              </Link>
            </>
          )}
          <h2 className='mt-5 mb-2 text-lg font-bold font-plusJakartaSans'>
            <ScrambleText
              k='home.bio.title'
              className='border-b-4 border-current'
            />
          </h2>
          <div className='flex space-x-2'>
            <span className='my-auto font-bold'>2003</span>
            <div>
              <T k='home.bio.born' />
            </div>
          </div>
          <div>
            <div className='flex items-start mt-2 space-x-2'>
              <span className='font-bold '>2021</span>
              <div>
                <T k='home.bio.enrolled' />
              </div>
            </div>
            <div className='flex items-start mt-2 space-x-2'>
              <span className='font-bold '>2024</span>
              <div>
                <T k='home.bio.bangkit' />
              </div>
            </div>
            <div className='flex items-start mt-2 space-x-2'>
              <span className='font-bold '>2025</span>
              <div>
                <T k='home.bio.degree' />
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <Transition>
        <div className='mt-5 '>
          <div className='mt-5'>
            <h2 className='mt-5 mb-2 text-lg font-bold font-plusJakartaSans'>
              <ScrambleText
                k='home.hobby.title'
                className='border-b-4 border-current'
              />
            </h2>
            <p className='font-normal text-justify indent-4'>
              <T k='home.hobby.before' />
              <a
                className='text-[#6d9886]'
                href='https://www.artstation.com/sahalnurdin'
                target='_blank'
                rel='noopener noreferrer'>
                <T k='home.hobby.link' />
              </a>
              <T k='home.hobby.after' />
            </p>
          </div>
          <div className='mt-5 '>
            <h2 className='mb-2 text-lg font-bold font-plusJakartaSans'>
              <ScrambleText
                k='home.socials.title'
                className='border-b-4 border-current'
              />
            </h2>
            <ul className='text-[#6D9886] '>
              <li>
                <a
                  href='https://www.linkedin.com/in/muhammadsahalnurdin/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center mb-2 gap-x-2'>
                  <div>
                    <FaLinkedin />
                  </div>
                  <div>muhammadsahalnurdin</div>
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/SahalN'
                  target='_blank'
                  rel='noopener noreferrer'
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
                  rel='noopener noreferrer'
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
                  rel='noopener noreferrer'
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
                  rel='noopener noreferrer'
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
          <h2 className='mb-5 text-lg font-bold font-plusJakartaSans'>
            <ScrambleText
              k='home.recent.title'
              className='border-b-4 border-current'
            />
          </h2>
        </div>
        <div className='flex justify-center rounded'>
          <Link href={`/projects/${project.slug}`} className='block group'>
            <div className='relative overflow-hidden rounded-xl'>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className='object-cover w-full h-auto transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105'
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
              <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:opacity-100 group-focus-visible:opacity-100' />
              <span className='absolute px-3 py-1 text-sm font-medium text-white transition duration-300 translate-y-2 border rounded-full opacity-0 pointer-events-none bottom-4 left-4 border-white/30 bg-white/20 backdrop-blur-md group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100'>
                <T k='home.recent.cta' />
              </span>
            </div>
            <h2 className='py-1 font-normal text-center transition-colors font-plusJakartaSans sm:px-2 group-hover:text-[#6d9886] group-focus-visible:text-[#6d9886]'>
              <Localized values={project.titles} />
            </h2>
          </Link>
        </div>
        <div className='mt-3 text-center'>
          <Link
            href='/projects'
            className='text-sm text-[#6d9886] hover:underline'>
            <T k='home.recent.all' />
          </Link>
        </div>
      </Transition>
      <Transition>
        <div className='flex flex-col mt-4'>
          <div>
            <h2 className='mb-2 text-lg font-bold font-plusJakartaSans'>
              <ScrambleText
                k='home.contact.title'
                className='border-b-4 border-current'
              />
            </h2>
            <p className='mb-2 text-sm font-light text-justify indent-4'>
              <T k='home.contact.body' />
            </p>
          </div>
          <div className='w-full'>
            <ContactForm />
          </div>
        </div>
      </Transition>
    </>
  );
}
