import { AxiosAuth } from "@/axios";
import { ClientApiRoutes } from "@/core/routes";
import { TypeApiResponse } from "@/models/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Response = TypeApiResponse<boolean, string>;

export const ThunkRunAmazonProductCategoryScrapper = createAsyncThunk<Response, string>(
  "api/runAmazonProductCategoryScrapper",
  async (categoryUrl: string, thunkAPI) => {
    try {
      const response = await AxiosAuth.post<boolean>(ClientApiRoutes.RunAmazonCategoryScrapper, { url: categoryUrl });
      return { status: 200, response: response.data };
    } catch (error) {
      return { status: 200, error: "error" };
    }
  },
);
