import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Man from "../assets/Hero.png";
import CountUp from "react-countup";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <motion.div
          className="lg:py-10 px-5 md:px-20 text-center md:text-left"
          variants={itemVariants}
        >
          <motion.div
            className="text-[40px] md:text-[60px] pt-32 md:pt-28"
            variants={itemVariants}
          >
            <h1 className="font-bold">Welcome to</h1>
            <span className="font-bold">Gentle Breeze Gym</span>
          </motion.div>

          <motion.div
            className="md:hidden flex justify-center my-6"
            variants={itemVariants}
          >
            <motion.button
              onClick={openModal}
              className="absolute top-[25%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white w-20 h-20 hidden md:flex items-center justify-center rounded-full z-10 md:w-16 md:h-16 lg:w-20 lg:h-20"
              style={{ backgroundColor: "#ED3833" }}
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
          </motion.div>

          <motion.div className="mt-4 text-gray-600" variants={itemVariants}>
            <p className="mb-2">
              Whether you're just starting or pushing your limits, our top-notch
              facilities and supportive trainers are here to guide you.
            </p>
            <span className="font-medium">
              Join us and elevate your workout journey today!
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center md:mt-10"
          variants={itemVariants}
        >
          <motion.div
            className="absolute left-[17.45rem] top-[0rem] w-[441px] h-[43.65rem] bg-[#1F1F1F] opacity-100 z-0 hidden xl:flex"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={Man} alt="image" className="md:mt-[2.75rem]"/>
          </motion.div>
        </motion.div>
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
        <motion.div
          className="bg-black rounded-[2.5rem] overflow-hidden w-full max-w-4xl h-[20rem] sm:h-[25rem] md:h-[30rem] relative"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
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
        </motion.div>
      </Modal>

      <motion.div
        className="bg-black flex flex-row items-center justify-center"
        variants={containerVariants}
      >
        {[
          {
            end: 100,
            text: "Happy customers",
            subtext: "Our community is growing fast",
          },
          {
            end: 2,
            text: "Years experience",
            subtext: "Experience in various workouts",
          },
          {
            end: 90,
            text: "Customer satisfaction",
            subtext: "Our community is growing fast",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="text-[#ffffff] pt-10 pb-10 m-7"
            variants={itemVariants}
          >
            <motion.h1
              className="text-[40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CountUp start={0} end={item.end} duration={3} />
              {item.end === 90 ? "%" : "+"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              {item.text}
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
            >
              {item.subtext}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hero;
