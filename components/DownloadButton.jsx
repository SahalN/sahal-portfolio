/** @format */

export default function DownloadButton() {
  return (
    <div>
      <a href='/pdfs/CV.pdf' download>
        <button
          type='button'
          style={{
            padding: "10px 20px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
          Download Resume
        </button>
      </a>
    </div>
  );
}
