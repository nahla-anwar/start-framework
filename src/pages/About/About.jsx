export default function About() {
  return (
    <>
      <div className="min-h-screen bg-[rgb(26,188,156)] flex justify-center items-center flex-col gap-5 text-white px-48">
        <h2 className="text-4xl uppercase font-bold">about component</h2>
        <div className="flex  items-center gap-4">
          <div className="h-1 w-20 bg-white"></div>
          <i className="fa-solid fa-star"></i>
          <div className="h-1 w-20 bg-white"></div>
        </div>
        <div className="flex gap-4">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
