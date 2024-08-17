import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Logo from "/assets/images/GentleBreezeLogo - Black.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 200) {
      setIsVisible(false);
    } else if (scrollTop < lastScrollTop || scrollTop < 200) {
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

  const NavLink = ({ to, children }) => {
    if (location.pathname === "/") {
      return (
        <ScrollLink
          className="px-4 cursor-pointer hover:text-red-500"
          activeClass="text-red-500"
          to={to}
          spy={true}
          smooth={true}
          duration={500}
        >
          {children}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to={`/#${to}`}
          className="px-4 cursor-pointer hover:text-red-500"
        >
          {children}
        </RouterLink>
      );
    }
  };

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
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="trainers">Trainers</NavLink>
            <NavLink to="plans">Plans</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
            <RouterLink
              to="/gallery"
              className="px-4 cursor-pointer hover:text-red-500"
              activeClassName="text-red-500"
            >
              Gallery
            </RouterLink>
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
        <NavLink to="home" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="trainers" onClick={() => setIsOpen(false)}>Trainers</NavLink>
        <NavLink to="plans" onClick={() => setIsOpen(false)}>Plans</NavLink>
        <NavLink to="reviews" onClick={() => setIsOpen(false)}>Reviews</NavLink>
        <RouterLink
          to="/gallery"
          className="py-2 cursor-pointer hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;