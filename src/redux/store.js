import { configureStore } from "@reduxjs/toolkit";
import { personReducer } from "~/step/personSlice";

export const store = configureStore({
  reducer: {
    person: personReducer,
  },
});
