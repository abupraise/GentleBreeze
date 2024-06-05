import React, { useState } from 'react';

const Payment = () => {
  const [billingPeriod, setBillingPeriod] = useState('Yearly');

  return (
    <div className="bg-white flex flex-col items-center p-20 w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-4/5 mb-12">
        <div className="flex flex-col mb-8 lg:mb-0">
          <div className="text-opacity-40 mb-4 text-2xl font-signika text-black">
            Pricing Plan
          </div>
          <span className="text-opacity-90 text-6xl font-signika font-bold uppercase text-black">
            Join Today
          </span>
        </div>
        <div className="shadow-lg rounded-2xl bg-white flex h-12">
          <button
            onClick={() => setBillingPeriod('Monthly')}
            className={`rounded-2xl w-24 text-center ${
              billingPeriod === 'Monthly' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <span className="font-signika font-semibold text-lg">
              Monthly
            </span>
          </button>
          <button
            onClick={() => setBillingPeriod('Yearly')}
            className={`rounded-2xl w-24 text-center ${
              billingPeriod === 'Yearly' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <span className="font-signika font-semibold text-lg">
              Yearly
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-4/5">
        <PricingCard 
          plan="Beginner Plan" 
          price={billingPeriod === 'Yearly' ? '$5' : '$60'} 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
          features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
          availableFeatures={["Feature 1", "Feature 2"]}
          buttonColor="bg-black"
          buttonTextColor="text-white"
        />
        <PricingCard 
          plan="Premium Plan" 
          price={billingPeriod === 'Yearly' ? '$15' : '$180'} 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
          features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
          availableFeatures={["Feature 1", "Feature 2", "Feature 3"]}
          cardColor="bg-black"
          textColor="text-white"
          buttonColor="bg-white"
          buttonTextColor="text-black"
          isPremium
        />
        <PricingCard 
          plan="Expert Plan" 
          price={billingPeriod === 'Yearly' ? '$20' : '$240'} 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
          features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
          availableFeatures={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
          buttonColor="bg-black"
          buttonTextColor="text-white"
        />
      </div>
    </div>
  );
}

const PricingCard = ({ plan, price, description, features, availableFeatures, cardColor = "bg-white", textColor = "text-black", buttonColor = "bg-black", buttonTextColor = "text-white", isPremium = false }) => {
  return (
    <div className={`shadow-md rounded-2xl p-8 w-full lg:w-1/3 ${cardColor} ${textColor}`}>
      <div className="mb-10">
        <div className="text-opacity-70 mb-4 text-lg font-signika font-semibold">
          {plan}
        </div>
        <div className="flex items-baseline mb-4">
          <span className="text-opacity-90 text-6xl font-signika font-semibold mr-2">
            {price}
          </span>
          <span className="text-opacity-90 text-lg font-signika font-semibold">
            / Month
          </span>
        </div>
        <span className="text-opacity-50 text-lg font-signika font-light">
          {description}
        </span>
      </div>
      <ul className="mb-10 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-4">
            {availableFeatures.includes(feature) ? (
              <div className={`${isPremium ? 'bg-white text-black' : 'bg-black text-white'} rounded-full w-5 h-5 flex items-center justify-center`}>
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
            <span className={`text-lg font-signika font-normal ${textColor}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button className={`rounded-2xl ${buttonColor} w-full py-4 ${buttonTextColor} font-signika font-bold text-lg`}>
        Choose Plan
      </button>
    </div>
  );
}

export default Payment;
