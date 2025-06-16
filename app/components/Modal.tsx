import React from "react";

const Modal = ({ isOpen, handleClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 max-w-full rounded-2xl shadow-lg p-6 relative">
        <div>{children}</div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-xl mt-4 hover:bg-red-600 transition ml-auto block"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Modal;
