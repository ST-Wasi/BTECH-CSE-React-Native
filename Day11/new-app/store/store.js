import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
