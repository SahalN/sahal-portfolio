import T from "./T";

export default function Footer() {
  return (
    <>
      <a
        href='https://www.linkedin.com/in/muhammadsahalnurdin/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-500 hover:underline dark:text-gray-100'>
        <T k='footer.rights' />
      </a>
    </>
  );
}
