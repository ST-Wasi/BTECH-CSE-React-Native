import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  password: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setName, setPassword } = UserSlice.actions;

export default UserSlice.reducer;
