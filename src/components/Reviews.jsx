import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./ReviewCard";
import Reviewers from "./Reviewers";

const Reviews = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 4,
      reviewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Jane Smith",
      rating: 5,
      reviewText: "Amazing experience! Highly recommend.",
    },
    {
      name: "Alice Johnson",
      rating: 3,
      reviewText: "It was okay, could be better.",
    },
    {
      name: "Bob Brown",
      rating: 2,
      reviewText: "Not satisfied with the service.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % reviews.length;
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollToPosition = carousel.children[currentIndex].offsetLeft - carousel.children[0].offsetLeft;
      carousel.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="bg-white p-6 md:p-20 relative flex flex-col items-center w-full h-auto">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
          <div className="opacity-40 text-lg font-signika font-normal text-black">
            Reviews
          </div>
          <span className="text-opacity-90 font-signika font-bold text-2xl md:text-4xl uppercase text-black">
            From Clients
          </span>
        </div>
        <button className="bg-black text-white py-3 px-6 md:px-8 rounded-lg font-signika font-bold text-base">
          + Give Review
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <Reviewers />
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center md:ml-[63px]">
          <div className="relative w-full">
            <div
              className="flex overflow-hidden w-full space-x-6 pt-12"
              ref={carouselRef}
            >
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  name={review.name}
                  rating={review.rating}
                  reviewText={review.reviewText}
                  isOverlay={index !== currentIndex}
                  className="flex-shrink-0 transition-opacity duration-500"
                  style={{
                    width: "300px",
                    md: "500px",
                    marginRight: "20px",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-start w-full mt-4 md:mt-1 space-x-4">
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
    </div>
  );
};

export default Reviews;
