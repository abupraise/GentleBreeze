import React from "react";
import Dumbell from "/assets/images/dumbell.jpg";

const Contact = () => {
  return (
    <div
      className="relative flex flex-col items-center w-full py-16 lg:py-24"
      style={{
        backgroundImage: `url(${Dumbell})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-white opacity-90 font-signika font-medium text-2xl mb-4">
          Call Us Today
        </h2>
        <p className="text-white opacity-90 font-signika font-bold text-5xl uppercase mb-4">
          +234 902 002 0403
        </p>
        <span className="text-white opacity-40 font-signika text-lg">
          Email: GENTLEBREEZE005@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Contact;
