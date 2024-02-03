import { AnyAction, AsyncThunk, Reducer, createReducer } from "@reduxjs/toolkit";
import { TypeApiData, TypeApiResponse } from "../models/types";
import { Utility } from "../utils/utility";
import { ThunkUtils } from "../utils/thunkUtils";
import { ApiStorage } from "../core/apiStorage";
import { GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";

export function CreateThunkReducer<TResponse, TError, Param = void>(
  thunk: AsyncThunk<TypeApiResponse<TResponse, TError>, Param, GetThunkAPI<unknown>>
): Reducer<TypeApiData<TResponse, TError>, AnyAction> {
  const defaultState = {
    uid: Utility.UUID.Generate(),
    isBusy: false,
    version: 0,
    reqCount: 0,
    propgressPercent: 0,
  };

  return createReducer(defaultState, (builder) => {
    builder.addCase(thunk.pending, (state, action) => {
      if (action && action.meta && action.meta.arg && ThunkUtils.GetDefault().isLocalOperation(action.meta.arg)) {
        return state;
      }
      state.isBusy = true;
      state.reqCount = state.reqCount + 1;
      return state;
    });
    builder.addCase(thunk.fulfilled, (state, action) => {
      if (!action.payload.error && action.payload.response)
        ApiStorage.GetDefault().setResponse(
          state.uid,
          ThunkUtils.GetDefault().getActionTypeWithoutCase(action.type),
          action.payload.response
        );
      state.version = state.version + 1;
      state.isBusy = false;
      return state;
    });
    builder.addCase(thunk.rejected, (state) => {
      state.isBusy = false;
      return state;
    });
  });
}
