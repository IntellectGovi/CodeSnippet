import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./Slices/loadingSlice.js";
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,
    loading: loadingReducer,
    user: userReducer,
  },
});
