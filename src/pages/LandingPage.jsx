import React from "react";
import Payment from "../components/Payment";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Payment />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
