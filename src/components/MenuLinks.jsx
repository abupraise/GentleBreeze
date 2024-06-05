import React from "react";

const MenuLinks = () => {
  return (
    <div className="flex flex-col items-center lg:ml-16 w-full lg:w-64">
      <h3 className="text-black font-signika font-semibold text-2xl mb-2">Menu</h3>
      <ul className="space-y-2">
        <li className="text-black opacity-40 font-signika text-lg">Home</li>
        <li className="text-black opacity-40 font-signika text-lg">About</li>
        <li className="text-black opacity-40 font-signika text-lg">Trainers</li>
        <li className="text-black opacity-40 font-signika text-lg">Plans</li>
        <li className="text-black opacity-40 font-signika text-lg">Reviews</li>
      </ul>
    </div>
  );
};

export default MenuLinks;
