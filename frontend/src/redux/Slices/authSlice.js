import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../Utils/useLocalStorage";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  signUpData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, action) {
      debugger;
      state.token = action.payload;
      useLocalStorage("token", "set", action.payload);
    },
    setSignUpData(state, action) {
      state.signUpData = action.payload;
    },
  },
});

export const { setToken, setSignUpData } = authSlice.actions;
export default authSlice.reducer;
