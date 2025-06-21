import React from "react";

const LeftSidebar = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  return (
    <div className="w-[18vw] h-screen fixed top-16 left-0 bg-gray-800 text-white p-6 shadow-lg z-50 ">
      <div className="flex flex-col gap-4 text-lg">
        <div className="hover:text-yellow-300 cursor-pointer">Home</div>
        <div className="hover:text-yellow-300 cursor-pointer">About</div>
        <div className="hover:text-yellow-300 cursor-pointer">Blog</div>
        <div className="hover:text-yellow-300 cursor-pointer">Contact Us</div>
      </div>
    </div>
  );
};

export default LeftSidebar;
