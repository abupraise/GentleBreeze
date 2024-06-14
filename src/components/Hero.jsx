import React from "react";
import Man from "../assets/man.jpg";
import Insta from "../assets/instagram.jpg";
import Money from "../assets/money.jpg";
import Time from "../assets/time.jpg";
import Weight from "../assets/weight.jpg";
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

        <div className="relative">
          {/* <div className="absolute inset-0  z-0">
            <img src={Rectangle} alt="rectangle" />
          </div> */}
          <div>
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
          <h1 className="text-[40px]">2+ years</h1>
          <p>Years experience</p>
          <span>Experience in various workouts</span>
        </div>

        <div className="text-[#ffffff] pt-10 pb-10 m-7">
          <h1 className="text-[40px]">90%</h1>
          <p>Customer satisfaction</p>
          <span>Our community is growing fast</span>
        </div>
      </div>

      <div>
        <h1 className="text-[40px] flex items-center justify-center m-7">
          Why Choose us
        </h1>
        <p className="opacity-40 flex items-center justify-center">
          At Gentle Breeze fitness centre, we believe that fitness is a journey,
          not...
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <div className="flex flex-auto">
            <div className="m-10">
              <img src={Boxing} alt="boxing" /> <h1>Trainers Qualifications</h1>
              <p>Hello world</p>
            </div>

            <div className="m-10">
              <img src={Weight} alt="weight" /> <h1>Facility Amenities</h1>
              <p>Hello world</p>
            </div>
          </div>

          <div className="flex flex-auto">
            <div className="m-10">
              <img src={Money} alt="moneyBag" /> <h1>Membership</h1>
              <p>Hello world</p>
            </div>

            <div className="m-10">
              <img src={Time} alt="time" /> <h1>Operating Hours</h1>
              <p>Hello world</p>
            </div>
          </div>
        </div>

        <div className="m-10">
          <p>Insert pictures here</p>
        </div>
      </div>

      <div>
        <h1 className="text-[40px] flex items-center justify-center">Meet Our Trainers</h1>
        <p className="opacity-40 flex items-center justify-center">We have the most qualified and best tainers in the city of kano....</p>
      </div>
    </div>
  );
};
