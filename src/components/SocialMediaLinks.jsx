import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram, faGithub, faYoutube, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col items-center lg:ml-16 w-full lg:w-64">
      <h3 className="text-black font-signika font-semibold text-2xl mb-2">Social Media</h3>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 opacity-40 text-black" />
          <span className="text-black opacity-40 font-signika text-lg">YouTube</span>
        </li>
        <li className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 opacity-40 text-black" />
          <span className="text-black opacity-40 font-signika text-lg">Facebook</span>
        </li>
        <li className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 opacity-40 text-black" />
          <span className="text-black opacity-40 font-signika text-lg">Instagram</span>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
