import React from "react";
import Man from "../assets/Hero.png";
import Insta from "../assets/instagram.jpg";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-2 relative">
        <div className="py-10 px-20">
          <motion.div
            className="text-[60px] pt-20 pb-5"
            animate={{ x: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold">ELEVATE YOUR </h1>
            <span className="font-bold">WORKOUT</span>
          </motion.div>

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

          <div className="flex items-center py-5 space-x-4">
            {/* <a href="https://www.instagram.com/gentle_breeze.kn?igsh=MTlwcGJyZ2NmMWZtOQ==">
              <img src={Insta} alt="instagram" />
            </a> */}
            <motion.a
              href="#"
              className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full"
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
            </motion.a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
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
