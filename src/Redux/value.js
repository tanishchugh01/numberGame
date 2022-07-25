import { createSlice } from "@reduxjs/toolkit";

export const valueSlice = createSlice({
  name: "a1",
  initialState: {
    a1: 0,
  },
  reducers: {
    generateRandom: (state) => {
      state.a1 = Math.floor(Math.random() * 13);
    },
  },
});

export const { generateRandom } = valueSlice.actions;
export default valueSlice.reducer;
