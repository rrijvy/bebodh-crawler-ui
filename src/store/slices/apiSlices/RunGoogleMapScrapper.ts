import { AxiosAuth } from "@/axios";
import { ClientApiRoutes } from "@/core/routes";
import { TypeApiResponse } from "@/models/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Response = TypeApiResponse<boolean, string>;

export const ThunkRunGoogleMapScrapper = createAsyncThunk<Response, string>(
  "api/runGoogleMapScrapper",
  async (searchText: string, thunkAPI) => {
    try {
      const response = await AxiosAuth.post<boolean>(ClientApiRoutes.RunGoogleMapScrapper, { searchText: searchText });
      return { status: 200, response: response.data };
    } catch (error) {
      return { status: 200, error: "error" };
    }
  },
);
