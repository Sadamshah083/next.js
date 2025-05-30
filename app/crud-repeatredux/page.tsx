"use client";
import { RootState } from "@/lib/store";
import React, { useState } from "react";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  updateUser,
} from "@/lib/features/CrudState/CrudSlice";

const page = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.crud.users);
  const [user, setUser] = useState({ name: "", email: "" });
  const [editId, setEditID] = useState(null);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editId !== null) {
      dispatch(updateUser({ editId, user }));
    } else {
      dispatch(addUser(user));
    }
    setUser({ name: "", email: "" });
  };
  const handleEdit = (index: any) => {
    const userToEdit = users[index];
    setUser(userToEdit);
    setEditID(index);
  };
  const handledelete = (index: any) => {
    dispatch(deleteUser(index));
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Name"
        value={user.email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {editId !== null ? "update" : "Add"}
      </button>
      <div>
        {users.map((user, index) => {
          return (
            <div key={index}>
              {user.name}
              {user.email}
              <button
                onClick={() => {
                  handleEdit(index);
                }}
              >
                Edit
              </button>
              <button onClick={() => handledelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default page;
