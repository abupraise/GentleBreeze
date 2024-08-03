import React, { useState } from "react";
import Man from "../assets/Hero.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="py-10 px-5 md:px-20 text-center md:text-left">
          <motion.div
            className="text-[40px] md:text-[60px] pt-10 md:pt-20"
            animate={{ x: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold">ELEVATE YOUR </h1>
            <span className="font-bold">WORKOUT</span>
          </motion.div>
          <div className="flex py-5">
            <motion.button
              onClick={openModal}
              className="bg-red-500 text-white w-16 h-16 flex items-center justify-center rounded-full"
              whileHover={{ scale: 1.1 }}
              animate={{
                scale: [1, 1.2, 1],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <FontAwesomeIcon icon={faPlay} />
            </motion.button>
          </div>
          <div className="opacity-40">
            <span>Welcome to Gentle Breeze Gym!</span>
            <p>
              At Gentle Breeze Gym, we foster a welcoming environment for all
              fitness levels. Whether you're starting your fitness journey or
              aiming to advance, our state-of-the-art facilities and dedicated
              trainers are here to support you. Join our community that values
              well-being and growth. Feel the progress and transformation at
              Gentle Breeze Gym. Let's get fit together!
            </p>
          </div>

          

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Video Modal"
            className="flex justify-center items-center h-full"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
          >
            <div className="bg-white p-10 w-full max-w-4xl h-3/4">
              <button onClick={closeModal} className="float-right mb-4">
                Close
              </button>
              <div className="flex justify-center items-center h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="GentleBreeze Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Modal>
        </div>

        <div className="relative flex justify-center items-center hidden md:flex">
          <div className="absolute left-[17.45rem] top-[0rem] w-[441px] h-[43.65rem] bg-[#1F1F1F] opacity-100 z-0"></div>
          <div className="relative">
            <img src={Man} alt="image" />
          </div>
        </div>
      </div>

      <div className="bg-black flex flex-row items-center justify-center">
        <div className="text-[#ffffff] pt-10 pb-10 m-7">
          <h1 className="text-[40px]">
            <CountUp start={0} end={100} duration={3} />+
          </h1>
          <p>Happy customers</p>
          <span>Our community is growing fast</span>
        </div>

        <div className="text-[#ffffff] pt-10 pb-10 m-7">
          <h1 className="text-[40px]">
            <CountUp start={0} end={2} duration={3} />+
          </h1>
          <p>Years experience</p>
          <span>Experience in various workouts</span>
        </div>

        <div className="text-[#ffffff] pt-10 pb-10 m-7">
          <h1 className="text-[40px]">
            <CountUp start={0} end={90} duration={3} />%
          </h1>
          <p>Customer satisfaction</p>
          <span>Our community is growing fast</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
