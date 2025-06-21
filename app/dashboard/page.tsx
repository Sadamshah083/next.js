"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaVaadin } from "react-icons/fa";
import LeftSidebar from "../components/leftSidebar";
import ImageSlider from "../components/ImageSlider";
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
    <div className="h-screen ">
      <ImageSlider />
    </div>
  );
};
export default page;
