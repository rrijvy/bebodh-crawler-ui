import { createSlice } from "@reduxjs/toolkit";
import { IAuthUser } from "../../models/types";

interface IAuthState {
  isAuthenticated: boolean;
  user?: IAuthUser;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = undefined;
    },
  },
});

export const ActionsAuth = authSlice.actions;
export const ReducerAuth = authSlice.reducer;
