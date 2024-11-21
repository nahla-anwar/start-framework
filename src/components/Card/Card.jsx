import { useState } from "react";

export default function Card({ image }) {
  const [showModal, setShowModal] = useState(false);
  return (
    // <>
    //   <div className="card p-6 w-1/3">
    //     <div className="inner rounded-lg overflow-hidden relative cursor-pointer">
    //       <img src={image} className="w-full " />
    //       <div className="overlay absolute top-0 bottom-0 left-0 right-0 z-10 bg-[#1abc9ce6] flex justify-center items-center text-white text-8xl opacity-0 hover:opacity-100 transition-[opacity] duration-500">
    //         <i class="fa-solid fa-plus"></i>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="card p-6 w-1/3">
        <div
          className="inner rounded-lg overflow-hidden relative cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img src={image} className="w-full " />
          <div className="overlay absolute top-0 bottom-0 left-0 right-0 z-10 bg-[#1abc9ce6] flex justify-center items-center text-white text-8xl opacity-0 hover:opacity-100 transition-[opacity] duration-500">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-blue-800 bg-opacity-30"
            onClick={(e) => {
              e.target === e.currentTarget ? setShowModal(false) : "";
            }}
          >
            <div className="relative  my-6 mx-auto max-w-2xl">
              <img src={image} />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
