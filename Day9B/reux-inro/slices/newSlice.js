import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  name: "",
  age: 0,
};

const newSlice = createSlice({
  name: "newslice",
  initialState: initialState,
  reducers: {
    increaseValue: (state) => {
      state.count = state.count + 1;
      // state.value += 1 // same work as above
    },
  },
});
export const { increaseValue } = newSlice.actions;

export default newSlice.reducer;
