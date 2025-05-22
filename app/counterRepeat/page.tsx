"use client";

import React, { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 100) setCount(count + 1); 
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1); 
  };

  return (
    <div className="border-2 border-gray-300 max-w-sm mx-auto mt-10 p-6 rounded-2xl shadow-lg text-center">
      <p className="text-xl font-semibold mb-4">Current value: {count}</p>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="bg-green-400 hover:bg-green-500 text-white font-medium px-4 py-2 rounded-2xl transition duration-200"
          aria-label="Increment count"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-lime-400 hover:bg-lime-500 text-white font-medium px-4 py-2 rounded-2xl transition duration-200"
          aria-label="Decrement count"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Page;
