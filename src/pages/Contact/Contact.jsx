export default function Contact() {
  return (
    <>
      <div className="min-h-screen pt-24">
        <div className="container flex items-center flex-col">
          <h2 className="text-4xl uppercase font-bold text-[rgb(44,62,80)] mb-5">
            conatct section
          </h2>
          <div className="flex  items-center gap-4">
            <div className="h-1 w-20 bg-[rgb(44,62,80)]"></div>
            <i className="fa-solid fa-star"></i>
            <div className="h-1 w-20 bg-[rgb(44,62,80)]"></div>
          </div>
          <form className="w-1/2 flex flex-col items-center gap-8 mt-20">
            <input
              type="text"
              placeholder="userName"
              className="border-b border-slate-300 rounded p-4 placeholder:text-slate-600 w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="userAge"
              className="border-b border-slate-300 rounded p-4 placeholder:text-slate-600 w-full focus:outline-none"
            />
            <input
              type="email"
              placeholder="userEmail"
              className="border-b border-slate-300 rounded p-4 placeholder:text-slate-600 w-full focus:outline-none"
            />
            <input
              type="password"
              placeholder="userPassword"
              className="border-b border-slate-300 rounded p-4 placeholder:text-slate-600 w-full focus:outline-none"
            />

            <button className="px-3 py-2 bg-[rgb(26,188,156)] rounded-md text-white self-start">
              send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
