import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../pages/Search";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsShowNav(false);
  };
  return (
    <header className="flex bg-cyan-200 bg-opacity-50 items-center justify-between p-4 px-10">
      <div>
        <h1 className="text-3xl font-semibold"> Exclusive</h1>
      </div>

      <i
        onClick={toggleMenu}
        className={`text-3xl cursor-pointer md:hidden ${
          isOpen ? "bx bx-x" : "bx bx-menu-alt-right"
        }`}
      ></i>

      <nav
        className={`text-black ${
          isOpen ? "top-16 bg-white text-white h-auto text-center" : "-top-full"
        } w-full grid text-lg gap-4 duration-800 p-2 md:static md:flex md:w-auto absolute left-0`}
      >
        <Link
          onClick={handleLinkClick}
          className="hover:animate-pulse hover:text-opacity-10 hover:border-b-4 border-indigo-500"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={handleLinkClick}
          className="hover:animate-pulse hover:text-opacity-10 hover:border-b-4 border-indigo-500"
          to="/contact"
        >
          contact
        </Link>
        <Link
          onClick={handleLinkClick}
          className="hover:animate-pulse hover:text-opacity-10 hover:border-b-4 border-indigo-500"
          to="/about"
        >
          About
        </Link>
        <Link
          onClick={handleLinkClick}
          className="hover:animate-pulse hover:text-opacity-10 hover:border-b-4 border-indigo-500"
          to="/singup"
        >
          Sign Up
        </Link>
        <div className="flex justify-center items-center flex-col">
          <Search />
        </div>
      </nav>
    </header>
  );
};
