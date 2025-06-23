"use client";
import React, { useEffect, useState } from "react";
import { FaVaadin, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LeftSidebar from "../components/leftSidebar";
import Link from "next/link";
const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const OpenSidebar = () => {
    setIsOpen((prev) => !prev);
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
    <div className="h-[10vh] hidden lg:block w-full z-10 fixed">
      <div className="bg-amber-700 w-full h-[10vh] flex items-center justify-between text-white px-6 rounded">
        <div className="flex items-center gap-6">
          {/* Toggle Icon */}
          {isOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={OpenSidebar}
            />
          ) : (
            <FaVaadin
              className="text-2xl cursor-pointer"
              onClick={OpenSidebar}
            />
          )}
          {/* Sidebar Component */}
          <LeftSidebar isOpen={isOpen} handleClose={handleClose} />
          {/* Navigation Links */}
          <ul className="flex gap-6 text-lg z-index">
            <Link href={"/portfolio"}>
              <li className="hover:text-blue-300 cursor-pointer">Profolio</li>
            </Link>
            <li className="hover:text-blue-300 cursor-pointer">Home</li>
            <li className="hover:text-blue-300 cursor-pointer">Blog</li>
            <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
          </ul>
        </div>
        {/* Logout Button */}
        <div className="bg-red-600">
          <button
            className="bg-amber-400 px-4 py-2 rounded-md hover:bg-amber-500 transition"
            onClick={handleLoggedOut}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};
export default page;
