import T from "./T";
import VisitorCount from "./VisitorCount";

export default function Footer() {
  return (
    <>
      {/* Plain text: the copyright line used to be the only link to LinkedIn,
          which nobody would think to click. LinkedIn now sits in My Socials
          and next to the contact form instead. */}
      <span className='text-gray-500 dark:text-gray-100'>
        <T k='footer.rights' />
      </span>
      <VisitorCount />
    </>
  );
}
