import { createSlice } from "@reduxjs/toolkit";

import { User } from "../../types";

interface AuthenticationState {
  isAuthenticated: boolean;
  usingLocalStorage: boolean | null;
  user: User | null;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  usingLocalStorage: null,
  user: null,
}

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    useLocalStorage: (state) => {
      state.usingLocalStorage = true;
    },
  }
});

export const { useLocalStorage } = authenticationSlice.actions;

export default authenticationSlice.reducer;
