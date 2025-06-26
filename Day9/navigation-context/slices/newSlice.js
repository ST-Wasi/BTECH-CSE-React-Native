import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "",
};

const newSlice = createSlice({
  name: "newslice",
  initialState: initialState,
  reducers: {
    incrementValue: (state) => {
      state.value = state.value + 1;
      //   state.value += 1;
    },
  },
});

export const { incrementValue } = newSlice.actions;

export default newSlice.reducer;
