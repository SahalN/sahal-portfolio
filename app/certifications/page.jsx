import Transition from "../../components/Transition";
import Heading from "../../components/Heading";
import ScrambleText from "../../components/ScrambleText";
import T from "../../components/T";
import { getCertificationsByIssuer } from "../../lib/certifications";

export const metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  const groups = getCertificationsByIssuer();

  return (
    <>
      <Transition>
        <div>
          <div className='mb-5'>
            <Heading>
              <ScrambleText k='certs.title' />
            </Heading>
            <p className='text-sm font-light text-justify indent-4'>
              <T k='certs.intro' />
            </p>
          </div>

          {groups.length === 0 ? (
            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
              <T k='certs.empty' />
            </p>
          ) : (
            <div className='space-y-6'>
              {groups.map((group) => (
                <section key={group.issuer}>
                  <h2 className='flex items-baseline gap-2 pb-1 mb-2 text-sm font-bold border-b font-plusJakartaSans border-black/10 dark:border-white/15'>
                    {group.issuer}
                    <span className='text-xs font-normal text-gray-500 dark:text-gray-400'>
                      {group.items.length}
                    </span>
                  </h2>
                  <ul className='space-y-2'>
                    {group.items.map((item) => (
                      <li
                        key={`${item.name}-${item.year}`}
                        className='flex items-baseline gap-3 text-sm'>
                        <span className='w-10 text-[11px] font-medium tracking-widest text-gray-500 uppercase shrink-0 dark:text-gray-400'>
                          {item.year}
                        </span>
                        <span className='font-light'>
                          {item.name}
                          {item.url ? (
                            <>
                              {" "}
                              <a
                                href={item.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-[#6d9886] hover:underline whitespace-nowrap'>
                                <T k='certs.credential' /> ↗
                              </a>
                            </>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </Transition>
    </>
  );
}
