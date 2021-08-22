import { createSlice } from "@reduxjs/toolkit";

export const counterSLice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      console.log("increment geldi");
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSLice.actions;

export default counterSLice.reducer;
