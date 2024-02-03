import { combineReducers } from "@reduxjs/toolkit";
import { CreateThunkReducer } from "../../libs/createThunkReducer";

export const ReducerApi = combineReducers({
  // Login: CreateThunkReducer(ThunkLogin),
});

export type ReducerApiState = ReturnType<typeof ReducerApi>;
