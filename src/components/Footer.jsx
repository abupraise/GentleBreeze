import React from "react";
import SocialMediaLinks from "../components/SocialMediaLinks";
import MenuLinks from "../components/MenuLinks";
import Logo from "/assets/images/GentleBreezeLogo - Black.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white flex flex-col items-center w-full p-4 lg:p-8 relative">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-3/4 mt-8 space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="flex flex-col items-start lg:items-start lg:text-left">
          <div className="relative flex items-center mb-4 right-6">
            <img src={Logo} alt="Logo" className="w-20 h-8" />
            <div className="absolute left-14 z-10 flex flex-col text-right">
              <span className="text-black opacity-70 font-bold text-lg leading-none">
                Gentle
              </span>
              <span className="text-black opacity-70 font-bold text-lg leading-none">
                Breeze
              </span>
            </div>
          </div>
          <span className="text-black opacity-40 font-signika text-lg">
            No. 5 Kabuga off Gwarzo road, opposite FCE, near KFC/Rufaidah mart, Kano.
          </span>
        </div>
        <MenuLinks />
        <SocialMediaLinks />
      </div>
      <span className="text-dark opacity-70 font-signika text-base mt-8">
        © {currentYear} Gentle Breeze Gym
      </span>
    </footer>
  );
};

export default Footer;
