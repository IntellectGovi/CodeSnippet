import { createSlice } from "@reduxjs/toolkit";
import { notify } from "../../Utils/Toaster";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("totalItems")
      ? JSON.parse(localStorage.getItem("totalItems"))
      : null,
  },
  reducers: {
    setCartItems(state, actions) {
      state.cartItems = actions.payload;
      notify("Item added to cart", "success");
    },
  },
});

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
