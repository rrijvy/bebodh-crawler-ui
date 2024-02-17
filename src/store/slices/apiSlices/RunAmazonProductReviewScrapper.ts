import { AxiosAuth } from "@/axios";
import { ClientApiRoutes } from "@/core/routes";
import { TypeApiResponse } from "@/models/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Response = TypeApiResponse<boolean, string>;

export const ThunkRunAmazonProductReviewScrapper = createAsyncThunk<Response, string>(
  "api/runAmazonProductReviewScrapper",
  async (categoryUrl: string, thunkAPI) => {
    try {
      const response = await AxiosAuth.post<boolean>(ClientApiRoutes.RunAmazonReviewScrapper, { url: categoryUrl });
      return { status: 200, response: response.data };
    } catch (error) {
      return { status: 200, error: "error" };
    }
  },
);
