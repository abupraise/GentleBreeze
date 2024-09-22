import React from "react";
import  Price1  from "../assets/price1.jpeg";
import  Price2  from "../assets/price2.jpeg";

const Payment2 = () => {
  return (
    <div>
        <div className="pl-10">
      <div className="text-opacity-40 mb-4 text-2xl font-signika text-black">
        Pricing Plan
      </div>
      <span className="text-opacity-100 text-6xl font-signika font-bold uppercase text-black">
        Join Today
      </span>
      </div>
      <div className="flex justify-around">
        <div className="flex space-between h-[700px]">
        <img src={Price1} alt="price 1"></img>
        <img src={Price2} alt="price 1"></img>
        </div>
      </div>
    </div>
  );
};

export default Payment2;
