"use client";
import React, { useState } from "react";

const page = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [editId, setEditID] = useState(null);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (editId !== null) {
      setUsers(users.map((user, index) => (index === editId ? form : user)));
    } else {
      setUsers([...users, form]);
    }

    setForm({ name: "", email: "" });
  };
  const handleEdit = (index) => {
    const userToEdit = users[index];
    setForm({ name: userToEdit.name, email: userToEdit.email });
    setEditID(index);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
    if (editId === index) setEditID(null);
  };
  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        type="text"
        placeholder="Name"
        value={form.email}
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
