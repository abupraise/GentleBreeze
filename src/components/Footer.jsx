import React from "react";
import SocialMediaLinks from "../components/SocialMediaLinks";
import MenuLinks from "../components/MenuLinks";
import Logo from "/assets/images/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white flex flex-col items-center w-full p-4 lg:p-8 relative">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-3/4 mt-16 space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="flex flex-col items-start lg:items-start lg:text-left">
          <img src={Logo} alt="Logo" className="w-28 h-12 mb-4" />
          <span className="text-black opacity-40 font-signika text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
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
