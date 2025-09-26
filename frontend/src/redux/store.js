import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    // Add your slice reducers here
    reducer: rootReducer,
  },
});
