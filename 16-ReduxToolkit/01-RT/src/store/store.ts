// A store is a central place where the state of our application is stored and it can be created using the configureStore() fn ,and it holds the entire state tree of our application

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
