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
      <div className="flex flex-col md:flex-row justify-around items-center md:space-x-8 h-auto">
        <div className="flex flex-col md:flex-row space-y-0 md:space-y-0">
          <img
            src={Price1}
            alt="price list 1"
            className="w-full h-auto md:w-[700px] object-contain"
          />

          <img
            src={Price2}
            alt="price list 2"
            className="w-full h-auto md:w-[700px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Payment2;
