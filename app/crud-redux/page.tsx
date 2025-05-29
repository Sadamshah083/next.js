"use client";
import { RootState } from "@/lib/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  updateUser,
} from "@/lib/features/CrudState/CrudSlice";

const page = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.crud.users);

  const [user, setuser] = useState({ name: "", email: "" });

  const [editId, setEditID] = useState(null);

  const handleChange = (e: any) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (editId !== null) {
      //Edit functionality
      dispatch(updateUser({ editId, user }));
    } else {
      // add fuctionality
      dispatch(addUser(user));
    }

    setuser({ name: "", email: "" });
  };
  const handleEdit = (index) => {
    const userToEdit = users[index];
    setuser(userToEdit);
    setEditID(index);
  };

  const handleDelete = (index: any) => {
    dispatch(deleteUser(index));
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />

      <input
        name="email"
        type="text"
        placeholder="Name"
        value={user.email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {editId !== null ? "update" : "Add"}
      </button>

      <div>
        {users.map((e, index) => {
          return (
            <div key={index}>
              {e.name} {e.email}
              <button
                className="bg-green-500"
                onClick={() => {
                  handleEdit(index);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
