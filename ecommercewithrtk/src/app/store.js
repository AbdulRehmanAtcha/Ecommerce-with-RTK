import { configureStore } from "@reduxjs/toolkit";
import eStoreSlice from "../features/mySlice";
export const store = configureStore({
  reducer: {
    name: eStoreSlice,
  },
});
