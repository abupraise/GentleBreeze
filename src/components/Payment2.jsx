import React from "react";
import Price1 from "../assets/price1.jpeg";
import Price2 from "../assets/price2.jpeg";

const Payment2 = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-4">
        <div className="text-center">
          <div className="opacity-40 text-lg font-signika font-normal text-black">
            Pricing Plan
          </div>
          <span className="text-opacity-90 font-signika font-bold text-2xl md:text-4xl text-black">
            Join Today
          </span>
        </div>
      </div>
      {/* Flexbox layout for images */}
      <div className="w-full flex flex-col xl:flex-row justify-center items-center xl:gap-8 gap-0">
        <img
          src={Price1}
          alt="price list 1"
          className="w-full h-auto xl:w-[700px] object-contain"
        />

        <img
          src={Price2}
          alt="price list 2"
          className="w-full h-auto xl:w-[700px] object-contain mt-0"
        />
      </div>
    </>
  );
};

export default Payment2;
