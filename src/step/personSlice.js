import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: {
    person: {
      name: "",
      dob: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
  },
  reducers: {
    submit: (state, action) => {
      state.person = action.payload;
    },
  },
});

export const personReducer = personSlice.reducer;
export const { submit } = personSlice.actions;
