import React from "react";
import Hands from "../assets/WhatsApp Image 2024-08-02 at 17.11.22.jpeg";
import Hands2 from "../assets/WhatsApp Image 2024-08-02 at 17.11.23.jpeg";
import People from "../assets/2151207438.jpg"

const Service = () => {
  return (
    <>
      <div>
        <div className="flex justify-center pb-5">
          <h1>Our Services</h1>
          <p>We offer various services....</p>
        </div>
        <div className="flex flex-col-2">
          <div className="w-[30%]">
            <img src={Hands} alt="bonding" />
            <img src={Hands2} alt="bonding 2" />
            <img src={People} alt="people"  />
          </div>
          <div className="pl-[15%]">
            <li>Team Bonding</li>
            <li>Weekly Athletes Bootcamp (Group/Individual)</li>
            <li>Corporate wellness</li>
            <li>Hikes and retreats (Small groups)</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
