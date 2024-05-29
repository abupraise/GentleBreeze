import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar, faStar as faRegularStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({ name, rating, reviewText }) => {
  return (
    <div className="shadow-md rounded-[30px] bg-white flex flex-col p-4 relative w-[500px] h-[250px] mb-6 border border-[#1F1F1F] border-opacity-0.5">
      <div className="text-opacity-90 mb-3 font-signika font-medium text-lg text-black">{name}</div>
      <div className="flex flex-row mb-3 gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={index < rating ? faSolidStar : faRegularStar}
            className={`w-5 h-5 ${index >= rating ? 'opacity-20' : ''}`}
          />
        ))}
      </div>
      <span className="text-opacity-80 font-signika font-normal text-sm text-black">{reviewText}</span>
    </div>
  );
};

export default ReviewCard;
