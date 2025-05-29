import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ name: null, email: null }],
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
    updateUser: (state, action) => {
      const { index, user } = action.payload;
      state.users[index] = user;
    },
  },
});

export const { addUser, deleteUser, updateUser } = crudSlice.actions;
export default crudSlice.reducer;
