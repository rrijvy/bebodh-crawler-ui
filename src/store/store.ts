import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunkApi = BaseThunkAPI<RootState, unknown, AppDispatch, unknown, unknown, unknown>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default makeStore;
