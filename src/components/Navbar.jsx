import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../pages/Search";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex bg-cyan-200 bg-opacity-50 items-center p-4 px-10">
      <div>
        <h1 className="text-3xl font-semibold"> Exclusive</h1>
      </div>
      <button
        className=" md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <i className={`bx ${isOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
      </button>

      <div className="text-center flex justify-center w-full items-center gap-4 font-semibold text-xl">
        <Link
          className="hover:animate-pulse hover:text-opacity-10 hover:border-b-4 border-indigo-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className="hover:animate-pulse hover:text-opacity-10 hover:border-b-4 border-indigo-500"
          to="/contact"
        >
          contact
        </Link>
        <Link
          className="hover:animate-pulse hover:text-opacity-10 hover:border-b-4 border-indigo-500"
          to="/about"
        >
          About
        </Link>
        <Link
          className="hover:animate-pulse hover:text-opacity-10 hover:border-b-4 border-indigo-500"
          to="/singup"
        >
          Sign Up
        </Link>
      </div>
      <Search />
    </nav>
  );
};
