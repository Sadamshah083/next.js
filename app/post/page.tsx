"use client";
import React, { useState } from "react";

const Post = () => {
  const [users, setUsers] = useState<{ name: string; email: string }[]>([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editIndex, setEditIndex] = useState<number | null>(null); // track edit mode

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      // Edit mode: update existing item6
      const updatedUsers = [...users];
      updatedUsers[editIndex] = form;
      setUsers(updatedUsers);
      setEditIndex(null); // Exit edit mode
    } else {
      // Add new user
      setUsers([...users, form]);
    }

    // Clear form
    setForm({ name: "", email: "" });
  };

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
    // Cancel edit if the deleted item was being edited
    if (editIndex === index) {
      setEditIndex(null);
      setForm({ name: "", email: "" });
    }
  };

  const editHandle = (index: number) => {
    setForm(users[index]); // Load selected user into form
    setEditIndex(index); // Enter edit mode
  };

  return (
    <div>
      <h1 className="text-2xl peer-last: p-5 bg-amber-500 relative  ">
        Post Api integrated
      </h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className=" outline-none m-1 p-1 border-2"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className=" outline-none m-2 p-1 border-2  contract-50"
      />
      <button
        className="bg-amber-300 rounded-2xl p-2 ml-2 contrast-50"
        onClick={handleSubmit}
      >
        {editIndex !== null ? "Update" : "Submit"}
      </button>
      <div className="mt-4">
        {users.map((e, index) => (
          <div key={index} className="mb-2">
            {e.name} - {e.email}
            <button
              className="bg-red-300 p-2 ml-2 rounded-2xl border cursor-pointer"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button
              className="bg-green-400 p-2 ml-2 rounded-2xl border cursor-pointer"
              onClick={() => editHandle(index)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Post = () => {
//   const [users, setUsers] = useState<{ name: string; email: string }[]>([]);
//   const [form, setForm] = useState({ name: "", email: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (!form.name || !form.email) return;
//     setUsers([...users, form]);
//     setForm({ name: "", email: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-purple-700">Post & Get App</h1>
//         <div className="text-sm text-gray-500">by YourName</div>
//       </nav>

//       {/* Description */}
//       <div className="max-w-3xl mx-auto mt-8 px-4 text-center">
//         <p className="text-lg text-gray-700 font-medium">
//           This simple React app demonstrates how to collect user input (name and
//           email) and display the submitted entries below using local state
//           management. It uses Tailwind CSS for styling and Framer Motion for
//           smooth animations.
//         </p>
//       </div>

//       {/* Form and List Section */}
//       <div className="flex justify-center mt-10 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 50 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 space-y-6"
//         >
//           <h2 className="text-3xl font-bold text-center text-purple-800">
//             🚀 Add Your Info
//           </h2>

//           <div className="space-y-4">
//             <motion.input
//               whileFocus={{ scale: 1.03 }}
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//             />
//             <motion.input
//               whileFocus={{ scale: 1.03 }}
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleSubmit}
//               className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 rounded-lg shadow-lg transition duration-200"
//             >
//               ✨ Submit
//             </motion.button>
//           </div>

//           {users.length > 0 && (
//             <div className="pt-4 border-t border-purple-200">
//               <h3 className="text-lg font-semibold text-purple-700 mb-3">
//                 📋 Submitted Users
//               </h3>
//               <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
//                 <AnimatePresence>
//                   {users.map((user, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 50 }}
//                       transition={{ duration: 0.3 }}
//                       className="flex items-center justify-between bg-purple-100 text-purple-800 p-3 rounded-xl shadow-sm"
//                     >
//                       <span className="font-medium">{user.name}</span>
//                       <span className="text-sm text-purple-600">
//                         {user.email}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Post;
