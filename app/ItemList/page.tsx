"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  deleteItem,
  editItem,
} from "@/lib/features/ItemSlice/ItemSlice";
import { v4 as uuidv4 } from "uuid";
import type { RootState } from "@/lib/store";

const Page = () => {
  const items = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (!newItem.trim()) return;
    dispatch(addItem({ id: uuidv4(), text: newItem }));
    setNewItem("");
  };

  const handleDelete = (id: string) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleUpdate = () => {
    if (editingId && editText.trim()) {
      dispatch(editItem({ id: editingId, data: { text: editText } }));
      setEditingId(null);
      setEditText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Item List
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter a new item"
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
          />
          <button
            onClick={handleAdd}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-xl shadow hover:scale-105 transition transform"
          >
            Add
          </button>
        </div>

        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl p-4 shadow-md flex justify-between items-center"
            >
              {editingId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 mr-3"
                  />
                  <button
                    onClick={handleUpdate}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  <span className="text-lg font-medium text-gray-800 flex-1">
                    {item.text}
                  </span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(item.id, item.text)}
                      className="bg-purple-500 text-white px-3 py-1 rounded-full hover:bg-purple-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
