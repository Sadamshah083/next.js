"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Inputcard from "./components/Inputcard";

const placeholder = "Enter product name";

const Page = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [inputval, setInputval] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: any) => {
    setInputval(e.target.value);
  };

  const handleAddProduct = () => {
    if (inputval.trim() === "") return;

    const newProduct = {
      id: products.length + 1, // fake ID
      title: inputval,
      rating: 0,
    };

    setProducts([newProduct, ...products]); // Add on top
    setInputval("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-8">
        Product Showcase
      </h1>

      {/* Input and Add Product */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-xl border border-red-300 mb-10">
        <h2 className="text-xl font-semibold text-red-700 mb-4 text-center">
          Add a New Product
        </h2>

        <Inputcard
          placeholder={placeholder}
          type="text"
          onChange={handleChange}
          value={inputval}
        />
        <button
          onClick={handleAddProduct}
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition"
        >
          Add Product
        </button>
      </div>
      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((e: any) => (
          <Card id={e.id} title={e.title} rating={e.rating} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;

// ""use client";

// import { useEffect, useState } from "react";
// import Card from "./components/Card";
// import Custominput from "./custominput/page";
// import Inputcard from "./components/Inputcard";

// const placeholder = "ABC";
// const Page = () => {
//   const [products, setProducts] = useState([]);
//   const fetchData = async () => {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     setProducts(data.products);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const [inputval, setinputval] = useState("");
//   const handleChange = (e: any) => {
//     setinputval(e.target.value);
//   };
//   return (
//     <div>
//       {products.map((e: any) => {
//         return (
//           // <div key={e.id}>
//           //   {e.id}
//           //   {e.title}
//           // </div>

//           <Card id={e.id} title={e.title} rating={e.rating} key={e.id} />
//         );
//       })}
//       <div>{inputval}</div>
//       <div
//         className="bg-gradient-to-r from-red-200 via-red-100 to-red-200
//              border-2 border-red-400 rounded-2xl shadow-lg
//              focus:outline-none focus:ring-4 focus:ring-red-300
//              placeholder-red-700 text-red-900 font-semibold
//              transition-all duration-300 ease-in-out h-full  w-full max-w-md "
//       >
//         <Inputcard
//           placeholder={placeholder}
//           type={"number"}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Page;
