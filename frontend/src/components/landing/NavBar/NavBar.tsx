import applogo from "../../../assets/logo.svg";
import { useState } from "react";
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex justify-between" id="pc">
      <a href="">
        <img src={applogo} alt="App Logo" className="px-4" />
      </a>
      <ul className="hidden sm:flex items-center gap-16 text-sm md:text-lg font-medium">
        <a
          href="#mision"
          className="text-slate-500 hover:text-slate-950 hover:underline underline-offset-8 decoration-dotted decoration-orange-500"
        >
          Mision
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-gray-900 hover:underline underline-offset-8 decoration-dotted decoration-orange-500 "
        >
          Community
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-gray-900 hover:underline underline-offset-8 decoration-dotted decoration-orange-500"
        >
          FaQs
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-gray-900 hover:underline underline-offset-8 decoration-dotted decoration-orange-500"
        >
          Contact
        </a>
      </ul>
      <div className="hidden group sm:flex gap-2 py-1 px-4 text-white rounded bg-gradient-to-r from-pink-500 to-orange-500 border border-l-pink-500 border-t-pink-500 border-r-orange-500 border-b-orange-500 hover:bg-none hover:text-black transition-all duration-700">
        <a href="" className="font-medium">
          Login
        </a>
      </div>
      <button onClick={toggleMenu} className="block sm:hidden">
        <span>
          <svg
            className="w-5 h-5 stroke-orange-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </span>
      </button>
      <div
        className={` fixed top-0 left-0 transition-transform duration-300 transform h-full max-w-xs w-full z-[1] bg-white border border-r-orange-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center py-3 px-4 ">
          <h3 className="font-bold text-slate-500">KnowMyVIBE</h3>
          <button type="button" className="" onClick={toggleMenu}>
            <span className="sr-only">Close</span>
            <svg
              className="shrink-0 size-4 stroke-pink-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="p-4 flex flex-col gap-y-5">
          <li>
            <a
              href="#mision"
              className="text-slate-500 hover:text-slate-950 hover:underline underline-offset-8 decoration-dotted decoration-orange-500"
            >
              Mision
            </a>
          </li>
          <li>
            <a
              href="#mision"
              className="text-slate-500 hover:text-slate-950 hover:underline underline-offset-8 decoration-dotted decoration-orange-500"
            >
              Comunity
            </a>
          </li>
          <li>
            <a
              href="#mision"
              className="text-slate-500 hover:text-slate-950 hover:underline underline-offset-8 decoration-dotted decoration-orange-500"
            >
              FaQs
            </a>
          </li>
          <li>
            <a
              href="#mision"
              className="text-slate-500 hover:text-slate-950 hover:underline underline-offset-8 decoration-dotted decoration-orange-500"
            >
              Contact
            </a>
          </li>
          <div className="w-fit group flex self-center  gap-2 py-1 px-4 text-white rounded bg-gradient-to-r from-pink-500 to-orange-500 border border-l-pink-500 border-t-pink-500 border-r-orange-500 border-b-orange-500 hover:bg-none hover:text-black transition-all duration-700">
            <a href="" className="font-medium">
              Login
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};
