"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import ModalPage from "../modal-page/page";
import MenuPage from "../components/MenuPage";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen bg-emerald-700 overflow-hidden">
      <motion.div
        className="h-20 bg-emerald-800 z-10 flex items-center justify-between px-6 shadow-lg"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-600 text-white text-3xl p-2 rounded-lg cursor-pointer shadow-md hover:bg-emerald-500 transition duration-300"
        >
          <CiMenuBurger onClick={handleOpen} />
        </motion.div>

        <motion.h1
          className="text-2xl font-bold text-white drop-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Dashboard Panel
        </motion.h1>

        <div className="w-10" />
      </motion.div>

      <motion.div
        className={`text-white min-h-screen pt-24 px-6 pb-10 relative z-0 transition-all duration-500 ${
          isOpen ? "pl-64" : "pl-6"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        {/* Animated Card Section */}
        <motion.div
          className="bg-white text-emerald-800 max-w-4xl mx-auto p-8 rounded-2xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-emerald-700">
            Welcome to Your Panel
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            fugiat laborum quas commodi autem aliquid, tempore earum doloribus
            unde. Ratione dolore sequi velit ullam minus vitae atque soluta
            delectus maiores!
          </p>
        </motion.div>

        <motion.p
          className="text-center mt-12 text-lg opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Designed with ❤️ using Next.js + Tailwind CSS + Framer Motion
        </motion.p>
      </motion.div>

      {/* Slide-in MenuPage */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-20 left-0 z-20"
          >
            <MenuPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
