import React from "react";
import { Link } from "react-scroll";

const MenuLinks = () => {
  return (
    <div className="flex flex-col items-center lg:ml-16 w-full lg:w-64">
      <h3 className="text-black font-signika font-semibold text-2xl mb-2">
        Menu
      </h3>
      <ul className="space-y-2">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <li className="text-black opacity-40 font-signika text-lg hover:text-red-500 hover:opacity-100 cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          <li className="text-black opacity-40 font-signika text-lg hover:text-red-500 hover:opacity-100 cursor-pointer">
            About
          </li>
        </Link>
        <Link to="trainers" spy={true} smooth={true} duration={500}>
          <li className="text-black opacity-40 font-signika text-lg hover:text-red-500 hover:opacity-100 cursor-pointer">
            Trainers
          </li>
        </Link>
        <Link to="plans" spy={true} smooth={true} duration={500}>
          <li className="text-black opacity-40 font-signika text-lg hover:text-red-500 hover:opacity-100 cursor-pointer">
            Plans
          </li>
        </Link>
        <Link to="reviews" spy={true} smooth={true} duration={500}>
          <li className="text-black opacity-40 font-signika text-lg hover:text-red-500 hover:opacity-100 cursor-pointer">
            Reviews
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuLinks;
