import { configureStore } from "@reduxjs/toolkit";
import COunterSliceReducer from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    counterslice: COunterSliceReducer,
  },
});
