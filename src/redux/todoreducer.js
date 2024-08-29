import { createSlice } from "@reduxjs/toolkit";

//initialisation du state de mon todo
const initialState = [
  { id: 1, task: "faire la vaiselle", completed: false, isEditing: false },
  { id: 2, task: "tondre la pelouse", completed: true, isEditing: false },
];

//creation de mon reducer et de ses actions
export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      console.log("add", action.payload);
    },
    deleteTodo: (state, action) => {
      console.log("deleteTodo", action.payload);
    },
    completed: (state, action) => {
      console.log("complete", action.payload);
    },
  },
});

//action creators
export const { add, deleteTodo, completed } = todoSlice.actions;

export default todoSlice.reducer;
