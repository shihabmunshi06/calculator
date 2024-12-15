import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  selectedTip: 0,
};

const tipSlice = createSlice({
  name: "tip",
  initialState,
  reducers: {
    addTip: (state, action) => {
      state.selectedTip = action.payload
    },
    reset: (state) => {
      state.selectedTip = 0
    }
  },
});

export default tipSlice.reducer;
export const { addTip, reset } = tipSlice.actions;
