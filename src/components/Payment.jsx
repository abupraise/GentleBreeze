import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
  const [billingPeriod, setBillingPeriod] = useState('Yearly');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const plans = [
    { plan: "Daily Plan", price: billingPeriod === 'Yearly' ? '$2' : '$60', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], availableFeatures: ["Feature 1", "Feature 2"], buttonColor: "bg-black", buttonTextColor: "text-white" },
    { plan: "1 Month Plan", price: billingPeriod === 'Yearly' ? '$5' : '$60', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], availableFeatures: ["Feature 1", "Feature 2"], buttonColor: "bg-black", buttonTextColor: "text-white" },
    { plan: "3 Months Plan", price: billingPeriod === 'Yearly' ? '$15' : '$180', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], availableFeatures: ["Feature 1", "Feature 2", "Feature 3"], cardColor: "bg-black", textColor: "text-white", buttonColor: "bg-white", buttonTextColor: "text-black", isPremium: true },
    { plan: "1-On-1 Payment per Session", price: billingPeriod === 'Yearly' ? '$20' : '$240', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], availableFeatures: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], buttonColor: "bg-black", buttonTextColor: "text-white" },
    { plan: "6 Months Plan", price: billingPeriod === 'Yearly' ? '$25' : '$300', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], availableFeatures: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], buttonColor: "bg-black", buttonTextColor: "text-white" },
    { plan: "1 Year Plan", price: billingPeriod === 'Yearly' ? '$30' : '$360', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], availableFeatures: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], buttonColor: "bg-black", buttonTextColor: "text-white" },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    setActiveIndex((prevIndex) => (prevIndex - 1 + plans.length) % plans.length);
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    setActiveIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  return (
    <div className="bg-white flex flex-col items-center p-10 w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-4/5 mb-12">
        <div className="flex flex-col mb-8 lg:mb-0">
          <div className="text-opacity-40 mb-4 text-2xl font-signika text-black">
            Pricing Plan
          </div>
          <span className="text-opacity-100 text-6xl font-signika font-bold uppercase text-black">
            Join Today
          </span>
        </div>
        <div className="shadow-lg rounded-2xl bg-white flex h-12">
          <button
            onClick={() => setBillingPeriod('Monthly')}
            className={`rounded-2xl w-24 text-center ${billingPeriod === 'Monthly' ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            <span className="font-signika font-semibold text-lg">
              Gym
            </span>
          </button>
          <button
            onClick={() => setBillingPeriod('Yearly')}
            className={`rounded-2xl w-24 text-center ${billingPeriod === 'Yearly' ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            <span className="font-signika font-semibold text-lg">
              Yoga
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-4/5 h-[40rem]">
        <button onClick={scrollLeft} className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 z-10">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" className="text-black hover:text-red-500" />
        </button>
        <div ref={scrollContainerRef} className="flex overflow-x-auto no-scrollbar gap-8 h-full items-center">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} isActive={index === activeIndex} />
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 z-10">
          <FontAwesomeIcon icon={faArrowRight} size="2x" className="text-black hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

const PricingCard = ({ plan, price, description, features, availableFeatures, cardColor = "bg-white", textColor = "text-black", buttonColor = "bg-black", buttonTextColor = "text-white", isPremium = false, isActive = false }) => {
  return (
    <div className={`shadow-md rounded-2xl p-8 w-full lg:w-1/3 min-w-[20rem] transition-transform duration-500 transform ${isActive ? "bg-black text-white scale-105" : cardColor} ${isActive ? "text-white" : textColor}`}>
      <div className="mb-10">
        <div className={`text-opacity-100 mb-4 text-lg font-signika font-semibold ${isActive ? "text-white" : ""}`}>
          {plan}
        </div>
        <div className="flex items-baseline mb-4">
          <span className={`text-opacity-100 text-6xl font-signika font-semibold mr-2 ${isActive ? "text-white" : ""}`}>
            {price}
          </span>
          <span className={`text-opacity-100 text-lg font-signika font-semibold ${isActive ? "text-white" : ""}`}>
            / Month
          </span>
        </div>
        <span className={`text-opacity-100 text-lg font-signika font-light ${isActive ? "text-white" : ""}`}>
          {description}
        </span>
      </div>
      <ul className="mb-10 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-4">
            {availableFeatures.includes(feature) ? (
              <div className={`rounded-full w-5 h-5 flex items-center justify-center ${isActive ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center border border-black">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
            <span className={`text-lg font-signika font-normal ${isActive ? "text-white" : textColor}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button className={`rounded-2xl ${isActive ? "bg-white text-black" : buttonColor} w-full py-4 ${isActive ? "text-black" : buttonTextColor} font-signika font-bold text-lg`}>
        Choose Plan
      </button>
    </div>
  );
};

export default Payment;
