import { combineReducers } from "redux";

import authReducer from "../Slices/authSlice.js";

const rootReducer = combineReducers({
  auth: authReducer, 
});

export default rootReducer;
