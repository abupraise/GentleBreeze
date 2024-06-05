import React from "react";
import Dumbell from "/assets/images/dumbell.jpg";

const Contact = () => {
  return (
    <div
      className="relative flex flex-col items-center w-full py-16 lg:py-24 -mx-4 lg:-mx-8"
      style={{
        backgroundImage: `url(${Dumbell})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-white opacity-90 font-signika font-medium text-2xl mb-4">
          Call us Today
        </h2>
        <p className="text-white opacity-90 font-signika font-bold text-5xl uppercase mb-4">
          +91 - 8200060000
        </p>
        <span className="text-white opacity-40 font-signika text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </span>
      </div>
    </div>
  );
};

export default Contact;
