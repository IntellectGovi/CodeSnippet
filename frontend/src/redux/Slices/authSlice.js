import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../Utils/useLocalStorage";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, action) {
      debugger
      state.token = action.payload;
      useLocalStorage("token", "set", action.payload);
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
