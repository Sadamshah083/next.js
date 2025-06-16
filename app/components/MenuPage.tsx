import React from "react";

const MenuPage = () => {
  return (
    <div className="bg-blue-600 w-64 top-20 left-0 h-screen shadow-xl z-30 px-6 py-8 text-white">
      <ul className="space-y-6 text-lg font-medium">
        <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
          Home
        </li>
        <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
          Service
        </li>
        <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
          Blog
        </li>
        <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
          About Us
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;
