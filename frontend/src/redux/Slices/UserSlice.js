import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../Utils/useLocalStorage";

const initialState = {
  userData: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
      useLocalStorage("userData", "set", action.payload);
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
