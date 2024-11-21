import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <>
      <nav
        className={`bg-[rgb(44,62,80)] py-9 text-white fixed top-0 left-0 right-0 z-20 ${
          scrolling ? "py-5" : ""
        }`}
      >
        <div className="container flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <Link to="/" className="uppercase">
              Start Framework
            </Link>
          </h1>
          <ul className="flex gap-6 pe-4">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return `font-bold uppercase px-2 py-2 rounded-md ${
                    isActive ? "bg-[rgb(26,188,156)]" : ""
                  }`;
                }}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => {
                  return `font-bold uppercase px-2 py-2 rounded-md ${
                    isActive ? "bg-[rgb(26,188,156)]" : ""
                  }`;
                }}
              >
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return `font-bold uppercase px-2 py-2 rounded-md ${
                    isActive ? "bg-[rgb(26,188,156)]" : ""
                  }`;
                }}
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
