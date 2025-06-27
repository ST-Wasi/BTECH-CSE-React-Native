import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    authslice: AuthSliceReducer,
  },
});
