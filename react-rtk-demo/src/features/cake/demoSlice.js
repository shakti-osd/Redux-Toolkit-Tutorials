import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfDemo: 50,
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfDemo--;
    },
    restocked: (state, action) => {
      state.numOfDemo += action.payload;
    },
  },
});

export default demoSlice.reducer;
export const { ordered, restocked } = demoSlice.actions;
