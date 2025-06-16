"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";
import Image from "next/image";
const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <button
        className="bg-green-500 text-white p-2 px-4 rounded hover:bg-green-400 transition"
        onClick={handleOpen}
      >
        Open
      </button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sint
          velit illum nesciunt dignissimos magnam neque eligendi eos voluptatem
          reprehenderit, autem omnis aliquid laudantium laboriosam porro
          assumenda mollitia alias repellendus.
        </p>
        <Image
          src={"/cheeta.avif"}
          alt="Cheeta-Image"
          height={100}
          width={100}
        />
      </Modal>
     
    </div>
  );
};
export default ModalPage;
