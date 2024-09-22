import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./ReviewCard";
//import Reviewers from "./Reviewers";

const Reviews = () => {
  const reviews = [
    {
      name: "Ahmed Hamisu Alhassan",
      rating: 4,
      reviewText:
        "Since I joined GB gym in february, I have lost more than 10kg of fat, built more endurance and even some muscles.",
    },
    {
      name: "Samuel Utulu",
      rating: 5,
      reviewText:
        "The community here is so supportive and welcoming. I've made great progress and wonderful friends along the way.",
    },
    {
      name: "Fa'iza Adam",
      rating: 3,
      reviewText:
        "I love how the coaches attend to thier clients at GB gym, they give you attention to detail and make sure you get value for your money.",
    },
    {
      name: "Usman Yusuf",
      rating: 4,
      reviewText:
        "One of the best gym centre's in Kano, we can't thank you enough for what you have done for us, we have improved so much, and our performance in the game has improved.",
    },
    {
      name: "Muneer BK (Ozil)",
      rating: 5,
      reviewText:
        "I've been a member of GB gym and I can't say enough good things about them. The facilities, the coaches, the staff are all amazing. I've made some incredible friends along the way and I wouldn't trade them for anything.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="bg-white p-6 md:p-20 relative flex flex-col items-center w-full h-auto z-0">
      <div className="w-full flex justify-center items-center mb-4">
        <div className="text-center">
          <div className="opacity-40 text-lg font-signika font-normal text-black">
            Reviews
          </div>
          <span className="text-opacity-90 font-signika font-bold text-2xl md:text-4xl text-black">
            From Our Clients
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[500px]">
          <ReviewCard
            name={reviews[currentIndex].name}
            rating={reviews[currentIndex].rating}
            reviewText={reviews[currentIndex].reviewText}
            isOverlay={false}
            hasBorder={true}
            className="w-full"
          />
        </div>
        <div className="flex justify-center w-full mt-4 space-x-4">
          <button
            onClick={handlePrevious}
            className="bg-white text-black w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-full font-signika font-bold text-base border-2 border-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-black w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-full font-signika font-bold text-base border-2 border-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
