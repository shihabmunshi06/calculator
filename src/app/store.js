import { configureStore } from "@reduxjs/toolkit";

import billReducer from "./features/billSlice";
import tipReducer from "./features/tipSlice";

export const store = configureStore({
  reducer: {
    bill: billReducer,
    tip: tipReducer,
  },
});
