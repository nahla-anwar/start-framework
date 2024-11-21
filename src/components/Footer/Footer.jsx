export default function Footer() {
  return (
    <>
      <footer className="bg-[rgb(44,62,80)] text-white">
        <div className="container flex justify-around text-center py-20">
          <div className="space-y-2 p-10">
            <h3 className="text-2xl font-semibold">LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="space-y-2 p-10">
            <h3 className="text-2xl font-semibold">AROUND THE WEB</h3>
            <ul className="flex gap-2 justify-center">
              <li className="w-9 h-9 rounded-full border border-white flex justify-center items-center">
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li className="w-9 h-9 rounded-full border border-white flex justify-center items-center">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="w-9 h-9 rounded-full border border-white flex justify-center items-center">
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
              <li className="w-9 h-9 rounded-full border border-white flex justify-center items-center">
                <i className="fa-solid fa-globe"></i>
              </li>
            </ul>
          </div>

          <div className="space-y-2 p-10">
            <h3 className="text-2xl font-semibold">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created{" "}
              <br />
              by Route
            </p>
          </div>
        </div>
        <div className="bg-[rgb(26,37,47)] text-center py-6">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
