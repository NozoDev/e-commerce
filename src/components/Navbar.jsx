import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex bg-red-200 items-center">
      <div>
        <h1> Exclusive</h1>
      </div>
      <div className="text-center flex justify-center w-full items-center">
        <Link to="/">Home</Link>
        <Link to="/contact">contact</Link>
        <Link to="/about">About</Link>
        <Link to="/singup">Sign Up</Link>
      </div>
    </nav>
  );
};
