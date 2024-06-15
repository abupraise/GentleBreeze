import React from "react";

const SectionTitle = ({ title, description }) => (
  <div className="mb-14 text-center max-w-4xl">
    <h1 className="opacity-90 text-4xl font-bold mb-4 text-black">{title}</h1>
    <p className="opacity-40 text-lg font-light text-black">{description}</p>
  </div>
);

const TrainerCard = ({ imageUrl, name, description, withOverlay }) => (
  <div
    className="relative m-4 rounded-[1.9rem] shadow-lg w-[20.9rem] h-[25rem] bg-cover bg-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {withOverlay && (
      <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-40 rounded-[1.9rem] flex flex-col p-4 justify-end">
        <h2 className="text-2xl font-semibold text-white mb-2">{name}</h2>
        <p className="text-sm font-light text-white">{description}</p>
      </div>
    )}
  </div>
);

const MentorSection = () => (
  <div className="flex flex-col md:flex-row md:justify-between items-start p-4">
    <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto mb-4 md:mb-0">
      <TrainerCard imageUrl="assets/images/Rectangle34.jpeg" />
      <TrainerCard imageUrl="assets/images/Rectangle35.jpeg" />
    </div>
    <div className="flex flex-col items-start md:ml-8">
      <div className="mb-6">
        <h3 className="text-lg font-medium uppercase text-black opacity-70 mb-1">
          Are you looking for a Mentor?
        </h3>
        <h2 className="text-4xl font-bold uppercase text-black opacity-90 mb-1">
          Coaches
        </h2>
        <p className="text-lg font-light text-black opacity-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <button className="rounded-lg bg-black text-white py-2 px-4 font-semibold">
        Explore More
      </button>
    </div>
  </div>
);

const Trainers = () => (
  <div className="bg-white flex flex-col items-center p-8 md:p-16">
    <SectionTitle
      title="Meet Our Trainers"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a"
    />
    <div className="flex flex-wrap justify-center">
      <TrainerCard imageUrl="assets/images/Rectangle37.jpeg" />
      <TrainerCard
        imageUrl="assets/images/Rectangle38.jpeg"
        withOverlay
        name="Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <TrainerCard imageUrl="assets/images/Rectangle39.jpeg" />
    </div>
    <MentorSection />
  </div>
);

export default Trainers;
