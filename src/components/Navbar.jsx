import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "/assets/images/GentleBreezeLogo - Black.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // Scroll Down
      setIsVisible(false);
    } else if (scrollTop < lastScrollTop || scrollTop < 200) {
      // Scroll Up
      setIsVisible(true);
    }

    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`bg-white bg-opacity-30 backdrop-blur-md shadow-lg fixed top-0 w-full z-10 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between py-5 px-4 md:px-10">
        <div className="relative flex items-center">
          <img src={Logo} alt="Logo" className="w-20 h-8 mr-2" />
          <div className="absolute left-14 z-10 flex flex-col text-right">
            <span className="text-black opacity-70 font-bold text-lg leading-none">
              Gentle
            </span>
            <span className="text-black opacity-70 font-bold text-lg leading-none">
              Breeze
            </span>
          </div>
        </div>
        <div className="hidden md:flex justify-center w-full">
          <div className="flex items-center space-x-10">
            <Link
              className="px-4 cursor-pointer hover:text-red-500"
              activeClass="text-red-500"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="px-4 cursor-pointer hover:text-red-500"
              activeClass="text-red-500"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              className="px-4 cursor-pointer hover:text-red-500"
              activeClass="text-red-500"
              to="trainers"
              spy={true}
              smooth={true}
              duration={500}
            >
              Trainers
            </Link>
            <Link
              className="px-4 cursor-pointer hover:text-red-500"
              activeClass="text-red-500"
              to="plans"
              spy={true}
              smooth={true}
              duration={500}
            >
              Plans
            </Link>
            <Link
              className="px-4 cursor-pointer hover:text-red-500"
              activeClass="text-red-500"
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
            >
              Reviews
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span className="block w-8 h-0.5 bg-black my-1"></span>
              <span className="block w-8 h-0.5 bg-black my-1"></span>
              <span className="block w-8 h-0.5 bg-black my-1"></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center md:hidden bg-white w-full py-5`}
      >
        <Link
          className="py-2 cursor-pointer hover:text-red-500"
          activeClass="text-red-500"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          className="py-2 cursor-pointer hover:text-red-500"
          activeClass="text-red-500"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          className="py-2 cursor-pointer hover:text-red-500"
          activeClass="text-red-500"
          to="trainers"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Trainers
        </Link>
        <Link
          className="py-2 cursor-pointer hover:text-red-500"
          activeClass="text-red-500"
          to="plans"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Plans
        </Link>
        <Link
          className="py-2 cursor-pointer hover:text-red-500"
          activeClass="text-red-500"
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Reviews
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
