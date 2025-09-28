import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    laoding: false,
  },
  reducers: {
    setLoading(state, action) {
      state.laoding = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default { loadingSlice };
