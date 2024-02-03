import { combineReducers } from "@reduxjs/toolkit";
import { ReducerAuth } from "./slices/authSlice";
import { ReducerApi } from "./slices/apiSlice";

const rootReducer = combineReducers({
  apiSlice: ReducerApi,
  authSlice: ReducerAuth,
});

export default rootReducer;
