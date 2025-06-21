"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaVaadin } from "react-icons/fa";
import LeftSidebar from "../components/leftSidebar";
import Link from "next/link";

const page = () => {
  //const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const OpenSidebar = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("LoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);
  const handleLoggedOut = () => {
    localStorage.removeItem("LoggedIn");
    router.push("/login");
  };
  return (
    <div className="h-[10vh]  hidden lg:block w-full ">
      <div className="bg-amber-700 w-full h-[10vh] flex items-center justify-between text-white px-6 rounded">
        <div className="flex items-center gap-6 ">
          <FaVaadin className="text-2xl cursor-pointer" onClick={OpenSidebar} />
          <LeftSidebar isOpen={isOpen} handleClose={handleClose} />
          <ul className="flex gap-6 text-lg">
            <Link href={"/portfolio"}>
              <li className="hover:text-blue-300 cursor-pointer">Profolio</li>
            </Link>
            <li className="hover:text-blue-300 cursor-pointer">Home</li>
            <li className="hover:text-blue-300 cursor-pointer">Blog</li>
            <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="bg-red-600 ">
          <button
            className="bg-amber-400 px-4 py-2 rounded-md hover:bg-amber-500 transition  "
            onClick={handleLoggedOut}
          >
            LogOut
          </button>
        </div>
      </div>
      {/* <ImageSlider /> */}
    </div>
  );
};
export default page;
