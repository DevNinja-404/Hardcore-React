// A slice is a piece of store state and the corresponding reducer logic to update the state.Slices are a way to organixe our Redux store by breaking it down into smalller,more manageable parts.

// A slice is like the smaller part of our apllication's entire state and the instructions on how to change or update that specific part of our entire application's state.

// ✔️ Better analogy:
// The Redux store is a whole cake 🍰.
// A slice is a section of the cake (e.g., counter, user, posts).
// Reducers are chefs 👨‍🍳👩‍🍳 following a recipe to modify the slice.
// Actions are the customer orders (e.g., "Add 1 to the counter").

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 }, //initial data of our state.
  reducers: {
    increment: (state) => {
      // Here we r directly mutating our state but if we had done so in react.js the value sure would have updated but if wouldn't have been reflected on the ui since it didn't cause any re-render since no state was modified using setState() as React relies on reference changes (===) to trigger re-renders.  But in redux we can do so and cause re-render because behind the scences, the redux-toolkit uses the immer library which makes it possible to mutate our state directly and also cause re-render.Behind the scenes, Immer creates a new immutable state without mutating the original one. Redux detects the change and triggers a re-render in connected components.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  //   increment and decrement are reducer functions inside createSlice.
  //   Redux Toolkit automatically generates action creators named increment and decrement.
  // When an action (like increment()) is dispatched, the corresponding reducer runs and updates the state.
});

// We r exporting this so that we can use this actions to call reducers using the useDispatch()
export const { increment, decrement } = counterSlice.actions;

// We r exporting this so that we can add the reducers of our counterSlice to our application store.
export default counterSlice.reducer;
