import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import image1 from "../assets/coach.jpeg";
import image2 from "../assets/coach1.jpeg";
import image3 from "../assets/coach3.jpeg";
import image4 from "../assets/Rectangle34.jpeg";
import image5 from "../assets/Rectangle35.jpeg";

const SectionTitle = ({ title, description }) => (
  <div className="mb-14 text-center max-w-4xl">
    <h1 className="opacity-90 text-4xl font-bold mb-4 text-black">{title}</h1>
    <p className="opacity-40 text-lg font-light text-black">{description}</p>
  </div>
);

const TrainerCard = ({ imageUrl, name, description, instagramUrl, tiktokUrl }) => {
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
      className="relative m-4 h-[25rem] rounded-[1.9rem] shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})`, width }}
    ></div>
  );
};

const MentorSection = () => (
  <div className="flex flex-col md:flex-row md:justify-between items-start p-10">
    <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto mb-4 md:mb-0">
      <TrainerCardStatic imageUrl={image4} width="10rem" />
      <TrainerCardStatic imageUrl={image5} />
    </div>
    <div className="flex flex-col items-start md:ml-8">
      <div className="mb-6 pt-20">
        <h3 className="text-lg font-medium uppercase text-black opacity-70 mb-1">
          Are you looking for a Mentor?
        </h3>
        <h2 className="text-4xl font-bold uppercase text-black opacity-90 mb-1">
          Coaches
        </h2>
        <p className="text-lg font-light text-black opacity-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <button className="rounded-lg bg-black text-white py-2 px-4 font-semibold">
        Explore More
      </button>
    </div>
  </div>
);

const Trainers = () => (
  <div className="bg-white flex flex-col items-center p-8 md:p-16">
    <SectionTitle
      title="Meet Our Trainers"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a"
    />
    <div className="flex flex-wrap justify-center">
      <TrainerCard
        imageUrl={image1}
        name="Alhassan Kutigi"
        description="(Coach And Gym Manager)"
        instagramUrl="https://www.instagram.com/alhassankutigi"
        tiktokUrl="https://www.tiktok.com/@alhassankutigi"
      />
      <TrainerCard
        imageUrl={image2}
        name="Sabiu Isah Galadima"
        description="(Fitness Trainer)"
        instagramUrl="https://www.instagram.com/sabiu_isah"
        tiktokUrl="https://www.tiktok.com/@sabiuisah"
      />
      <TrainerCard
        imageUrl={image3}
        name="Auwal Umar Mainika"
        description="(Fitness Trainer)"
        instagramUrl="https://www.instagram.com/auwalumar"
        tiktokUrl="https://www.tiktok.com/@auwalumar"
      />
    </div>
    <MentorSection />
  </div>
);

export default Trainers;
