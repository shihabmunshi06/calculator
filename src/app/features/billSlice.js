import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./tipSlice";

let initialState = {
  money: 0,
  person: 0,
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    addBill: (state, action) => {
      state.money = action.payload;
    },
    addPerson: (state, action) => {
      state.person = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state) => {
      state.money = 0;
      state.person = 0
    })
  }
});

export default billSlice.reducer;
export const { addBill, addPerson } = billSlice.actions;
