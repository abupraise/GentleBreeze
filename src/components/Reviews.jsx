import React from 'react';
import ReviewCard from './ReviewCard';
import Reviewers from './Reviewers';

const Reviews = () => {
  const reviews = [
    {
      name: "Name",
      rating: 4,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    // Add more reviews as needed
  ];

  return (
    <div className="bg-white p-20 relative flex flex-col items-center w-full h-auto">
      <div className="w-full flex justify-between items-center mb-8">
        <div>
          <div className="opacity-40 text-lg font-signika font-normal text-black">Reviews</div>
          <span className="text-opacity-90 font-signika font-bold text-4xl uppercase text-black">From you</span>
        </div>
        <button className="bg-black text-white py-3 px-8 rounded-lg font-signika font-bold text-base">
          + Give Review
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
      <Reviewers/>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            reviewText={review.reviewText}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
