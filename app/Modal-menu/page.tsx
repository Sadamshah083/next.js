"use client";
import React, { useState } from "react";

const Modalmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 shadow-md p-4">
      <nav className="mt-4">
        <ul className="flex flex-col gap-4">
          <li>Home</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Modalmenu;
