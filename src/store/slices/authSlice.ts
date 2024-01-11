import { createSlice } from "@reduxjs/toolkit";
import { IAuthUser } from "../../models/types";

interface IAuthState {
  isAuthenticated: boolean;
  user: IAuthUser | null;
}

const storedAuthState = localStorage.getItem("authState");
export const userRole = storedAuthState ? JSON.parse(storedAuthState).user.role : "User";

const initialState: IAuthState = {
  isAuthenticated: storedAuthState ? JSON.parse(storedAuthState).isAuthenticated : false,
  user: storedAuthState ? JSON.parse(storedAuthState).user : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("authState");
      localStorage.removeItem("authToken");
    },
  },
});

export const ActionsAuth = authSlice.actions;
export const ReducerAuth = authSlice.reducer;
