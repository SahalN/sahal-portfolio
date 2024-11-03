/** @format */

export default function DownloadButton() {
  return (
    <div>
      <a href='/pdfs/CV.pdf' download>
        <button
          type='button'
          className='px-8 py-3 font-semibold rounded-lg bg-[#319795] text-white'>
          My Resume
        </button>
      </a>
    </div>
  );
}
