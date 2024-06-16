import React from "react";
import Man from "../assets/Hbg22.png";
import Insta from "../assets/instagram.jpg";
//import Rectangle from "../assets/Rectangle.jpg";
import Boxing from "../assets/boxing.jpg";

export const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="py-10 px-10">
          <div className="text-[60px] pb-5">
            <h1>ELEVATE YOUR </h1>
            <span>WORKOUT</span>
          </div>

          <div className="opacity-40">
            <p>Welcome to Gentle Breeze fitness centre...</p>
          </div>

          <div className="py-5 px-10">
            <a href="https://www.instagram.com/gentle_breeze.kn?igsh=MTlwcGJyZ2NmMWZtOQ==">
              <img src={Insta} alt="instagram" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute left-[17.45rem] top-[0rem] w-[441px] h-[43.65rem] bg-[#1F1F1F] opacity-100 z-0"></div>
          <div className="relative z-10">
            <img src={Man} alt="image" />
          </div>
        </div>
      </div>

      <div className="bg-black flex flex-row items-center justify-center">
        <div className="text-[#ffffff] pt-10 pb-10 m-7">
          <h1 className="text-[40px]">100+</h1>
          <p>Happy customers</p>
          <span>Our community is growing fast</span>
        </div>

        <div className="text-[#ffffff] pt-10 pb-10 m-7">
          <h1 className="text-[40px]">90%</h1>
          <p>Customer satisfaction</p>
          <span>Our community is growing fast</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
