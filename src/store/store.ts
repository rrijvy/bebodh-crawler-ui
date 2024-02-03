import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunkApi = BaseThunkAPI<RootState, unknown, AppDispatch, unknown, unknown, unknown>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
