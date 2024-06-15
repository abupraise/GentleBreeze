import React from "react";
import Payment from "../components/Payment";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Trainers from "../components/Trainers";
import ScrollToTopButton from "../components/ScrollToTopButton";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="trainers">
        <Trainers />
      </section>
      <section id="plans">
        <Payment />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default LandingPage;
