import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center py-5 text-2xl sticky top-0 bg-white bg-opacity-30 backdrop-blur-md shadow-lg z-10">
      <Link
        className="px-10 cursor-pointer hover:text-red-500"
        activeClass="text-red-500"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        Home
      </Link>
      <Link
        className="px-10 cursor-pointer hover:text-red-500"
        activeClass="text-red-500"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        About
      </Link>
      <Link
        className="px-10 cursor-pointer hover:text-red-500"
        activeClass="text-red-500"
        to="trainers"
        spy={true}
        smooth={true}
        duration={500}
      >
        Trainers
      </Link>
      <Link
        className="px-10 cursor-pointer hover:text-red-500"
        activeClass="text-red-500"
        to="plans"
        spy={true}
        smooth={true}
        duration={500}
      >
        Plans
      </Link>
      <Link
        className="px-10 cursor-pointer hover:text-red-500"
        activeClass="text-red-500"
        to="reviews"
        spy={true}
        smooth={true}
        duration={500}
      >
        Reviews
      </Link>
    </div>
  );
};

export default Navbar;
