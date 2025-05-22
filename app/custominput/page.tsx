"use client";
import React, { useState } from "react";

const Custominput = () => {
  const [place, setPlace] = useState("");

  const handleChange = (e: any) => {
    setPlace(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-xl border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center ">
          Stylish Input Field
        </h2>

        <label htmlFor="id1" className="block text-green-800 font-medium mb-2">
          Your Entry
        </label>

        <input
          className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 
            p-4 border-2 border-green-400 rounded-xl shadow-md 
            focus:outline-none focus:ring-4 focus:ring-green-300 
            placeholder-green-800 text-green-900 font-medium 
            transition-all duration-300 ease-in-out w-full"
          type="text"
          value={place}
          placeholder="Enter anything amazing..."
          onChange={handleChange}
          id="id1"
        />

        <div className="mt-6 p-4 bg-green-100 rounded-xl text-green-800 font-semibold text-lg shadow-inner text-center">
          {place ? `"${place}"` : "Your input will appear here..."}
        </div>
      </div>
    </div>
  );
};

export default Custominput;

// "use client";
// import React, { useState } from "react";

// const Custominput = () => {
//   const [place, setPlace] = useState("");

//   const handleChange = (e: any) => {
//     setPlace(e.target.value);
//   };

//   return (
//     <div>
//       {/* <input
//         type="text"
//         id="id1"
//         placeholder="enter a Numbers"
//         value={place}
//         onChange={handleChange}
//       /> */}

//       <input
//         className="bg-gradient-to-r from-green-200 via-green-100 to-green-200
//              p-3 border-2 border-green-400 rounded-2xl shadow-lg
//              focus:outline-none focus:ring-4 focus:ring-green-300
//              placeholder-green-700 text-green-900 font-semibold
//              transition-all duration-300 ease-in-out m-3 w-full max-w-md"
//         type={"text"}
//         value={place}
//         placeholder="Enter anything amazing..."
//         onChange={handleChange}
//         id="id1"
//       />
//       {place}
//     </div>
//   );
// };

// export default Custominput;
