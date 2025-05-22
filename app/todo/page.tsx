"use client";

import React, { useState } from "react";

const Page = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [editID, setEditID] = useState(null);
  const handleAdd = () => {

    if (editID !== null) {
      setTodos(todos.map((todo, index) => (index === editID ? task : todo)));
    } else {
      setTodos([...todos, task]);
      setTask("");
    }
    setTask("");
    setEditID(null);
  };

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editHandle = (index: number) => {
    const todoToEdit = todos[index];
    setTask(todoToEdit);
    setEditID(index);
  };

  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-center text-green-700">
        My To-Do List
      </h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 p-2 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          {editID !== null ? "update" : "Add"}
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-green-100 px-4 py-2 rounded-lg"
          >
            <span>{item}</span>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700"
            >
              delete
            </button>

            <button
              className="text-blue-500 "
              onClick={() => editHandle(index)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default Page;
