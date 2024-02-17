import { AxiosAuth } from "@/axios";
import { ClientApiRoutes } from "@/core/routes";
import { TypeApiResponse } from "@/models/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Response = TypeApiResponse<boolean, string>;

export const ThunkDeleteProxySchedule = createAsyncThunk<Response, string>("api/deleteProxySchedule", async (param, thunkAPI) => {
  try {
    const response = await AxiosAuth.post<boolean>(ClientApiRoutes.DeleteProxySchedule, null, { params: { jobId: param } });
    return { status: 200, response: response.data };
  } catch (error) {
    return { status: 200, error: "error" };
  }
});
