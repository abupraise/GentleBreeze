import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import image1 from "../assets/coach.jpeg";
import image2 from "../assets/coach1.jpeg";
import image3 from "../assets/coach3.jpeg";
import image4 from "../assets/WhatsApp Image 2024-08-02 at 17.11.22.jpeg";
import image5 from "../assets/2151207438.jpg";

const SectionTitle = ({ title, description }) => (
  <div className="mb-14 text-center max-w-4xl">
    <h1 className="opacity-90 text-4xl font-bold mb-4 text-black">{title}</h1>
    <p className="opacity-40 text-lg font-light text-black">{description}</p>
  </div>
);

const TrainerCard = ({
  imageUrl,
  name,
  description,
  instagramUrl,
  tiktokUrl,
}) => {
  return (
    <div className="relative m-4 w-[20.9rem] h-[25rem] perspective-1000">
      <div className="relative w-full h-full duration-700 transform-style-preserve-3d hover:rotate-y-180">
        <div
          className="absolute w-full h-full backface-hidden rounded-[1.9rem] shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute w-full h-full backface-hidden bg-white bg-opacity-30 backdrop-blur-lg text-black rounded-[1.9rem] shadow-lg transform rotate-y-180 flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>
          <p className="text-sm font-light mb-4">{description}</p>
          <div className="flex space-x-4">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="text-black hover:text-red-500 transition-colors duration-300"
              />
            </a>
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTiktok}
                size="lg"
                className="text-black hover:text-red-500 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrainerCardStatic = ({ imageUrl, width = "20.9rem" }) => {
  return (
    <div
      className="relative h-[25rem] rounded-[1.9rem] shadow-lg bg-cover bg-center md:m-4 mt-4"
      style={{ backgroundImage: `url(${imageUrl})`, width }}
    ></div>
  );
};

const OurServices = () => (
  <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-start pt-10 md:pt-20 px-4 md:px-20">
    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-1/2">
      <div className="w-full flex justify-center md:justify-start items-center mb-4">
        <div className="text-center md:text-left">
          <div className="opacity-40 text-lg font-signika font-normal text-black">
            What We Do
          </div>
          <span className="text-opacity-90 font-signika font-bold text-2xl md:text-4xl text-black">
            Our Services
          </span>
        </div>
      </div>
      <ul className="text-sm md:text-lg font-light text-black opacity-70 list-disc list-inside">
        <li>Hike and Retreats (Small Groups)</li>
        <li>Weekly Athletes BootCamp (Group / Individual Session)</li>
        <li>Corporate Wellness</li>
        <li>Team Bonding Activities</li>
        <li>More Coming Soon...</li>
      </ul>
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-1/2 gap-8 md:gap-4">
      <TrainerCardStatic
        imageUrl={image4}
        className="w-full md:w-[15rem] object-contain"
      />
      <TrainerCardStatic
        imageUrl={image5}
        className="w-full md:w-[25rem] object-contain"
      />
    </div>
  </div>
);

const Trainers = () => (
  <div className="bg-white flex flex-col items-center p-8 md:p-16">
    <SectionTitle
      title="Meet Our Trainers"
      description="At Gentle Breeze Gym, our team of expert trainers are dedicated to helping you achieve your fitness goals. 
      With years of experience and a passion for wellness, our trainers provide personalized guidance and support every step of the way. 
      Join us and benefit from their expertise and motivation, ensuring a successful and enjoyable fitness journey."
    />
    <div className="flex flex-wrap justify-center">
      <TrainerCard
        imageUrl={image1}
        name="Alhassan Kutigi"
        description="Coach And Gym Manager"
        instagramUrl="https://www.instagram.com/ak_barfitness_?igsh=MTVmcHhqbGI4d2JyZA=="
        tiktokUrl="https://www.tiktok.com/@ak_barfitnes?_t=8nEHTeT9HQj&_r=1"
      />
      <TrainerCard
        imageUrl={image2}
        name="Sabiu Isah Galadima"
        description="Fitness Trainer"
        instagramUrl="https://www.instagram.com/steelman_00?igsh=aTMxcDRqMDcyeGp6"
        tiktokUrl="https://www.tiktok.com/@pullup_king00?_t=8nEHkgdyAli&_r=1"
      />
      <TrainerCard
        imageUrl={image3}
        name="Auwal Umar Mainika"
        description="Fitness Trainer"
        instagramUrl="https://www.instagram.com/a_u_mainika?igsh=M3Y2dGhqOWF6d2pv"
        tiktokUrl="https://www.tiktok.com/@a_u_mainika?_t=8nEHu8zHjtu&_r=1"
      />
    </div>
    <OurServices />
  </div>
);

export default Trainers;
