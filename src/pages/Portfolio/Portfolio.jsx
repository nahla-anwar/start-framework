import Card from "../../components/Card/Card";
import port1 from "../../assets/imgs/port1.png";
import port2 from "../../assets/imgs/port2.png";
import port3 from "../../assets/imgs/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="min-h-screen pt-32">
        <div className="container flex flex-col items-center gap-5">
          <h2 className="text-4xl uppercase font-bold text-[rgb(44,62,80)]">
            conatct section
          </h2>
          <div className="flex  items-center gap-4">
            <div className="h-1 w-20 bg-[rgb(44,62,80)]"></div>
            <i className="fa-solid fa-star"></i>
            <div className="h-1 w-20 bg-[rgb(44,62,80)]"></div>
          </div>
          <div className="flex flex-wrap">
            <Card image={port1} />
            <Card image={port2} />
            <Card image={port3} />
            <Card image={port1} />
            <Card image={port2} />
            <Card image={port3} />
          </div>
        </div>
      </div>
    </>
  );
}
