import React from 'react';
import icon1 from '../assets/Group 21.svg';
import icon2 from '../assets/Group 24.svg';
import icon3 from '../assets/Group 22.svg';
import icon4 from '../assets/Group 23.svg';
import image1 from '../assets/WhatsApp Image 2024-08-02 at 17.11.22.jpeg';
import image2 from '../assets/2151207438.jpg';
import image3 from '../assets/WhatsApp Image 2024-08-02 at 17.11.23.jpeg';

const SectionTitle = ({ title, description }) => (
  <div className="mb-14 text-center max-w-4xl">
    <h1 className="opacity-90 text-4xl font-bold mb-4 text-black">
      {title}
    </h1>
    <p className="opacity-40 text-lg font-light text-black">
      {description}
    </p>
  </div>
);

const FeatureCard = ({ title, description, icon }) => (
  <div className="m-4 flex flex-col items-center w-64">
    <div className="bg-black rounded-full p-2 mb-4">
      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
        <img src={icon} alt="Icon" className="w-6 h-6" />
      </div>
    </div>
    <div className="text-center">
      <h2 className="opacity-90 text-xl font-semibold mb-2 text-black">
        {title}
      </h2>
      <p className="opacity-40 text-sm font-light text-black">
        {description}
      </p>
    </div>
  </div>
);

const ImageCard = ({ imageUrl }) => (
  <div
    className="m-4 w-64 h-64 bg-cover bg-center rounded-2xl shadow-lg"
    style={{ backgroundImage: `url(${imageUrl})` }}
  ></div>
);

const AboutUs = () => {
  return (
    <div className="bg-white flex flex-col items-center p-4 md:p-16 box-border w-full">
      <SectionTitle
        title="Why Choose Us"
        description="At Gentle Breeze Gym, we offer state-of-the-art facilities designed to meet all your fitness needs. 
        Our certified trainers provide personalized workout plans to help you reach your goals, and our welcoming community creates a supportive and motivating environment. 
        We take a holistic approach to fitness, offering not just workout options but also nutritional guidance and wellness programs to enhance your overall well-being. 
        Plus, with flexible membership options, you can find the perfect fit for your lifestyle and schedule. Experience the Gentle Breeze difference, where your fitness journey becomes a breeze."
      />
      <div className="flex flex-wrap justify-center items-center">
        <FeatureCard
          title="Trainer Qualifications"
          description="Our trainners are highly professional and dedicated to helping you achieve your fitness goals"
          icon={icon1}
        />
        <FeatureCard
          title="Facility Amenities"
          description="Our fitness equipments, dynamic group classes, and luxurious amenities like relaxation lounge, all designed to enhance your workout experience."
          icon={icon2}
        />
        <FeatureCard
          title="Membership Cost"
          description="We offer flexible membership options for our customers such as daily, monthly, and yearly."
          icon={icon3}
        />
        <FeatureCard
          title="Operating Hours"
          description="We are open everyday."
          icon={icon4}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center mt-16">
        <ImageCard imageUrl={image1} />
        <ImageCard imageUrl={image2} />
        <ImageCard imageUrl={image3} />
      </div>
    </div>
  );
};

export default AboutUs;
