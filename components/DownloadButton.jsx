/** @format */

export default function DownloadButton() {
  return (
    <div>
      <a href='/pdfs/CV.pdf' download>
        <button
          type='button'
          className='px-8 py-3 font-semibold rounded-lg bg-[#6D9886] hover:bg-[#a7c1b6] text-white'>
          My Resume
        </button>
      </a>
    </div>
  );
}
