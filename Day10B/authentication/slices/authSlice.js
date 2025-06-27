import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "authslice",
  initialState: initialState,
  reducers: {
    setIsUserSuthenticated: (state, action) => {
      state.isUserAuthenticated = action.payload;
    },
  },
});

export const { setIsUserSuthenticated } = AuthSlice.actions;

export default AuthSlice.reducer;
