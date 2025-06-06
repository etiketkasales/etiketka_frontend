"use client";
import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "../store/reducers/navigation.slice";

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
