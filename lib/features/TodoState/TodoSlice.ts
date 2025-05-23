"use client";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    //     deleteTodo: (state, action) => {
    // state.todo.slice(action.payload)
    //}
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    updateTodo: (state, action) => {
      const { editID, task } = action.payload;
      state.todos[editID] = task;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

// "use client"
// import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// const initialState = {
//     todos:[]
// }

// export const todoSlice = createSlice({

//     name: "todo",
//     initialState,
//     reducers: {
//         addTodo: (state, action)=>{
//             state.todos.push(action.payload)
//         }

//     }

// })

// export const { addTodo } = todoSlice.actions
// export default todoSlice.reducer
