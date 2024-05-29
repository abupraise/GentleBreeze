import React from 'react';

const PlanCard = ({ title, price, features, bgColor, textColor, buttonBgColor, buttonTextColor }) => (
  <button className={`shadow-md rounded-lg ${bgColor} p-6 w-full max-w-md transform transition duration-300 ease-in-out hover:bg-black hover:text-white`}>
    <div className="mb-6">
      <div className={`text-lg font-semibold ${textColor} mb-2 hover:text-white font-signika`}>{title}</div>
      <div className="flex items-baseline">
        <span className={`text-4xl font-semibold ${textColor} hover:text-white font-signika`}>${price}</span>
        <span className={`text-base ${textColor} ml-2 hover:text-white font-signika`}>/ Month</span>
      </div>
    </div>
    <div className="text-sm text-opacity-50 mb-6 hover:text-opacity-75 font-signika">{features.description}</div>
    {features.list.map((feature, index) => (
      <div key={index} className="flex items-center mb-2">
        <div className={`opacity-70 bg-${textColor} rounded-full w-5 h-5 mr-2 hover:bg-white`} />
        <span className={`text-sm ${textColor} hover:text-white font-signika`}>{feature}</span>
      </div>
    ))}
    <div className={`rounded-lg ${buttonBgColor} py-3 w-full text-center mt-6 transition duration-300 ease-in-out hover:bg-white hover:text-black`}>
      <span className={`text-lg font-bold ${buttonTextColor} hover:text-black font-signika`}>Choose Plan</span>
    </div>
  </button>
);

const Payment = () => {
  const plans = [
    {
      title: 'Beginner Plan',
      price: '05',
      features: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        list: [
          'Feature 1',
          'Feature 2',
          'Feature 3',
          'Feature 4',
          'Feature 5',
        ],
      },
      bgColor: 'bg-white',
      textColor: 'text-black',
      buttonBgColor: 'bg-black',
      buttonTextColor: 'text-white',
    },
    {
      title: 'Premium Plan',
      price: '15',
      features: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        list: [
          'Feature 1',
          'Feature 2',
          'Feature 3',
          'Feature 4',
          'Feature 5',
        ],
      },
      bgColor: 'bg-black',
      textColor: 'text-white',
      buttonBgColor: 'bg-white',
      buttonTextColor: 'text-black',
    },
    {
      title: 'Expert Plan',
      price: '20',
      features: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        list: [
          'Feature 1',
          'Feature 2',
          'Feature 3',
          'Feature 4',
          'Feature 5',
        ],
      },
      bgColor: 'bg-white',
      textColor: 'text-black',
      buttonBgColor: 'bg-black',
      buttonTextColor: 'text-white',
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center p-20 w-full box-border font-signika">
      <div className="mb-12 flex flex-col items-center w-full box-border text-center">
        <div className="text-lg opacity-40 font-normal mb-4">Pricing plan</div>
        <span className="text-4xl font-bold uppercase">Join Today</span>
      </div>
      <div className="flex justify-between w-full max-w-5xl gap-8 box-border flex-wrap">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Payment;
