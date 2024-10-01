import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 overflow-hidden">
      <div className="relative">
        <h1 className="text-9xl font-extrabold tracking-widest mb-4 relative z-10">
          4
          <span className="text-[#ED3833] inline-block animate-pulse">0</span>
          4
        </h1>
        {/* <Dumbbell className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black/5 w-full h-full max-w-[300px] max-h-[300px] -z-10" /> */}
      </div>
      <p className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Oops! This page doesn't exist.
      </p>
      <div className="max-w-md text-center mb-8">
        <p className="mb-4">
          Looks like you've wandered into the page. Don't worry, even the best of us get lost sometimes!
        </p>
        <div className="relative h-2 w-full bg-black/10 rounded-full overflow-hidden my-6">
          <div className="absolute top-0 left-0 h-full w-full bg-[#ED3833]"></div>
        </div>
      </div>

      <div className="mb-12 flex space-x-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full bg-[#ED3833] animate-bounce`}
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
      
      <Link
        to="/"
        className="group flex items-center px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-[#ED3833] transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back Home
      </Link>
    </div>
    </>
  );
}
