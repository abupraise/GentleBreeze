import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faSolidStar,
  faStar as faRegularStar,
} from "@fortawesome/free-solid-svg-icons";

const ReviewCard = ({ name, rating, reviewText, className, isOverlay }) => {
  return (
    <div
      className={`relative shadow-md rounded-[30px] bg-white flex flex-col p-4 w-[500px] h-[250px] mb-6 border-2 border-[#1F1F1F] border-opacity-50 ${className}`}
    >
      <div className={`relative z-10 ${isOverlay ? "opacity-50" : ""}`}>
        <div
          className="text-opacity-90 mb-3 font-signika font-medium text-black"
          style={{ fontSize: "30px" }}
        >
          {name}
        </div>

        <div className="flex flex-row mb-3 gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={index < rating ? faSolidStar : faRegularStar}
              className={`w-5 h-5 ${index >= rating ? "opacity-20" : ""}`}
            />
          ))}
        </div>
        <span
          className="text-opacity-80 font-signika font-regular text-black"
          style={{ fontSize: "18px" }}
        >
          {reviewText}
        </span>
      </div>
      {isOverlay && (
        <div
          className="absolute inset-0 rounded-[30px]"
          style={{
            background:
              "linear-gradient(91.99deg, rgba(255, 255, 255, 0) 1.4%, #FFFFFF 76.74%)",
          }}
        ></div>
      )}
    </div>
  );
};

export default ReviewCard;
