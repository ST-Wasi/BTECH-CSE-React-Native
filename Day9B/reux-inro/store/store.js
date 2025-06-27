import { configureStore } from "@reduxjs/toolkit";
import newSliceReducer from "../slices/newSlice";

export const store = configureStore({
  reducer: {
    newslice: newSliceReducer,
  },
});
