import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
  name: "",
  university: "",
};

const CounterSlice = createSlice({
  name: "99999",
  initialState: initialState,
  reducers: {
    incrementCount: (state) => {
      state.count = state.count + 1;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setName: (state, action) => {
      console.log(action.payload);
      state.name = action.payload;
    },
    setUniversity: (state, action) => {
      state.university = action.payload;
    },
  },
});

export const { incrementCount, setCount, setName, setUniversity } =
  CounterSlice.actions;

export default CounterSlice.reducer;
