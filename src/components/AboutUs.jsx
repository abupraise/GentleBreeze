import React from 'react';
import icon1 from '../assets/Group 21.svg';
import icon2 from '../assets/Group 24.svg';
import icon3 from '../assets/Group 22.svg';
import icon4 from '../assets/Group 23.svg';
import image1 from '../assets/Rectangle 30.jpeg';
import image2 from '../assets/Rectangle 31.jpeg';
import image3 from '../assets/Rectangle 29.jpeg';

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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="flex flex-wrap justify-center items-center">
        <FeatureCard
          title="Trainer Qualifications"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          icon={icon1}
        />
        <FeatureCard
          title="Facility Amenities"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          icon={icon2}
        />
        <FeatureCard
          title="Membership Cost"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          icon={icon3}
        />
        <FeatureCard
          title="Operating Hours"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
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
