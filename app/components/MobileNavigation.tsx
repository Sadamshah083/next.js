// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaVaadin } from "react-icons/fa";
// import LeftSidebar from "./leftSidebar";
// import Link from "next/link";

// const page = () => {
//   //const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   // const handleOpen = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);
//   const OpenSidebar = () => {
//     setIsOpen(!isOpen);
//   };
//   const router = useRouter();
//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("LoggedIn");
//     if (!isLoggedIn) {
//       router.push("/login");
//     }
//   }, [router]);
//   const handleLoggedOut = () => {
//     localStorage.removeItem("LoggedIn");
//     router.push("/login");
//   };
//   return (
//     <div className="h-[10vh]  block lg:hidden flex-wrap">
//       <div className="bg-amber-700 w-full h-[10vh]  items-center justify-between text-white px-4 py-3 rounded">
//         <div className="flex items-center gap-2">
//           <FaVaadin className="text-2xl cursor-pointer" onClick={OpenSidebar} />
//           <LeftSidebar isOpen={isOpen} handleClose={handleClose} />
//           <ul className="flex gap-6 text-sm">
//             <Link href={"/portfolio"}>
//               <li className="hover:text-blue-300 cursor-pointer">Profolio</li>
//             </Link>
//             <li className="hover:text-blue-300 cursor-pointer">Home</li>
//             <li className="hover:text-blue-300 cursor-pointer">Blog</li>
//             <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
//           </ul>
//           <button
//             className="bg-amber-400 p-1  rounded-md hover:bg-amber-500 transition"
//             onClick={handleLoggedOut}
//           >
//             LogOut
//           </button>
//         </div>
//       </div>
//       {/* <ImageSlider /> */}
//     </div>
//   );
// };
// export default page;

"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaVaadin } from "react-icons/fa";
import LeftSidebar from "../components/leftSidebar";
import Link from "next/link";
import { Fa0 } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

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
    <div className="h-[10vh]  block lg:hidden w-full fixed">
      <div
        className="bg-amber-700 w-full h-full flex items-center justify-between 
      
           text-white px-6 rounded"
      >
        <div className="flex items-center gap-2 ">
          <FaVaadin className="text-1xl cursor-pointer" onClick={OpenSidebar} />
          <LeftSidebar isOpen={isOpen} handleClose={handleClose} />
          <ul className="flex gap-3 text-sm">
            <Link href={"/portfolio"}>
              <li className="hover:text-blue-300 cursor-pointer">Profolio</li>
            </Link>
            <li className="hover:text-blue-300 cursor-pointer">Home</li>
            <li className="hover:text-blue-300 cursor-pointer">Blog</li>
            <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="">
          <button
            className="bg-red-500 text-white  px-2 py-1 rounded-full shadow-md hover:bg-amber-500 duration-200 ease-in-out"
            onClick={handleLoggedOut}
          >
            <CiLogout />
          </button>
        </div>
      </div>
      {/* <ImageSlider /> */}
    </div>
  );
};
export default page;
