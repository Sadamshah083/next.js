import React from "react";

const LeftSidebar = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed top-12 left-0 w-full h-screen bg-blue-100 blur-full lg:hidden -z-20"></div>
      <div className="w-[80%] lg:w-[18vw] h-screen fixed top-12 left-0 bg-gray-800 text-white p-6 shadow-lg -z-10">
        <div className="flex flex-col gap-2 text-sm">
          <div className="hover:text-yellow-300 cursor-pointer">Home</div>
          <div className="hover:text-yellow-300 cursor-pointer">About</div>
          <div className="hover:text-yellow-300 cursor-pointer">Blog</div>
          <div className="hover:text-yellow-300 cursor-pointer">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
