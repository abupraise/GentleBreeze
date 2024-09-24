import React, { useState, useCallback } from "react";
import Man from "../assets/Hero.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import ReactPlayer from "react-player/lazy";

Modal.setAppElement("#root");

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = useCallback(() => {
    const galleryVideos = ["/assets/videos/GB.mp4"];
    const randomVideo =
      galleryVideos[Math.floor(Math.random() * galleryVideos.length)];
    setCurrentVideo(randomVideo);
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
    setCurrentVideo("");
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="py-10 px-5 md:px-20 text-center md:text-left">
          <motion.div
            className="text-[40px] md:text-[60px] pt-32 md:pt-48"
            animate={{ x: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold">Welcome to</h1>
            <span className="font-bold">Gentle Breeze Gym</span>
          </motion.div>
          <div className="opacity-40 mt-4">
            <p>
              Whether you're just starting or pushing your limits, our top-notch
              facilities and supportive trainers are here to guide you.
            </p>
            <span>Join us and elevate your workout journey today!</span>
          </div>
        </div>

        <div className="relative flex justify-center items-center hidden md:flex">
          <div className="absolute left-[17.45rem] top-[0rem] w-[441px] h-[43.65rem] bg-[#1F1F1F] opacity-100 z-0"></div>
          <div className="relative">
            <img src={Man} alt="image" />
          </div>
        </div>
      </div>

      <motion.button
        onClick={openModal}
        className="absolute top-[25%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white w-20 h-20 hidden md:flex items-center justify-center rounded-full z-10"
        style={{ backgroundColor: "#ED3833", zIndex: 5 }}
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
        <FontAwesomeIcon icon={faPlay} size="2x" />
      </motion.button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="flex justify-center items-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
        shouldCloseOnOverlayClick={true}
      >
        <div
          className="bg-black rounded-[2.5rem] overflow-hidden w-full max-w-4xl h-[30rem] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-3 right-3 text-white text-3xl font-bold cursor-pointer z-10"
          >
            &times;
          </button>

          <div className="flex justify-center items-center h-full z-0">
            <ReactPlayer
              url={currentVideo}
              controls
              playing
              loop
              playbackRate={[0.5, 1, 2, 4]}
              progressColor="#ED3833"
              width="100%"
              height="100%"
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
            />
          </div>
        </div>
      </Modal>

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
