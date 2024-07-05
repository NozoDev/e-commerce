import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../pages/Search";

export const Navbar = () => {
  return (
    <nav className="flex bg-cyan-200 bg-opacity-50 items-center p-4 px-10">
      <div>
        <h1 className="text-2xl font-semibold"> Exclusive</h1>
      </div>
      <div className="text-center flex justify-center w-full items-center gap-4">
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
