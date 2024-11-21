import avatar from "../../assets/imgs/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[rgb(26,188,156)] flex justify-center items-center flex-col gap-5 text-white">
        <img src={avatar} alt="avatar image" className="w-60" />
        <h2 className="text-4xl uppercase font-bold">start Framework</h2>
        <div className="flex  items-center gap-4">
          <div className="h-1 w-20 bg-white"></div>
          <i className="fa-solid fa-star"></i>
          <div className="h-1 w-20 bg-white"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
