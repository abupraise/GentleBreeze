import React from "react";
import { motion } from "framer-motion";
//import Payment from "../components/Payment";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Trainers from "../components/Trainers";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Payment2 from "../components/Payment2";
import WhatsAppChat from "../components/WhatsappChat";


const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <motion.section
        id="home"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.section>
      <motion.section
        id="about"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AboutUs />
      </motion.section>
      <motion.section
        id="trainers"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Trainers />
      </motion.section>
      
      <motion.section
        id="plans"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Payment2 />
      </motion.section>
      <motion.section
        id="reviews"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Reviews />
      </motion.section>
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <WhatsAppChat/>
    </>
  );
};

export default LandingPage;
