import { configureStore } from "@reduxjs/toolkit";
import courceSlice from "./courceSlice";

const store = configureStore({
  reducer: {
    cource: courceSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
