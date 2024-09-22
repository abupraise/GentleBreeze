import React from "react";
import image4 from "../assets/WhatsApp Image 2024-08-02 at 17.11.22.jpeg";
import image5 from "../assets/2151207438.jpg";

const TrainerCardStatic = ({
  imageUrl,
  width = "100%",
  maxWidth,
  className = "",
}) => {
  return (
    <div
      className={`relative h-[25rem] rounded-[1.9rem] shadow-lg bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${imageUrl})`, width, maxWidth }}
    ></div>
  );
};

const Services = () => (
  <div className="flex flex-col md:flex-row md:justify-between items-start p-10 pt-20">
    <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto mb-4 md:mb-0">
      <TrainerCardStatic imageUrl={image4} width="15rem" />
      <TrainerCardStatic imageUrl={image5} width="25rem" />
    </div>

    <div className="flex flex-col items-start md:ml-8">
      <div className="mb-6 pt-20">
        <h2 className="text-4xl font-bold uppercase text-black opacity-90 mb-1">
          Our Services
        </h2>

        <div className="text-lg font-light text-black opacity-40">
          <li>Hike and Retreats (Small Groups)</li>
          <li>Weekly Athletes BootCamp (Group / Individual Session)</li>
          <li>Corporate Wellness</li>
          <li>Team Bonding Activities</li>
          <li>More Coming Soon...</li>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
