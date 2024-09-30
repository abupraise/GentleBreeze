import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col items-start lg:items-center w-full lg:w-64 lg:ml-16">
      <h3 className="text-black font-signika font-semibold text-2xl mb-2 lg:pl-0">
        Follow Us On
      </h3>
      <ul className="space-y-4 lg:pl-0">
        {/* <li className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 opacity-40 text-black" />
          <span className="text-black opacity-40 font-signika text-lg">YouTube</span>
        </li>
        <li className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 opacity-40 text-black" />
          <span className="text-black opacity-40 font-signika text-lg">Facebook</span>
        </li> */}
        <li className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-6 h-6 opacity-40 text-black"
          />
          <a href="https://www.instagram.com/gentle_breeze.kn?igsh=MTlwcGJyZ2NmMWZtOQ==">
            <span className="text-black opacity-40 font-signika text-lg">
              Instagram
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
