import { AxiosAuth } from "@/axios";
import { ClientApiRoutes } from "@/core/routes";
import { ProxyScheduleSchema } from "@/models/proxyScheduleSchema";
import { TypeApiResponse } from "@/models/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Response = TypeApiResponse<boolean, string>;

export const ThunkAddOrUpdateProxyRetriverSchedule = createAsyncThunk<Response, ProxyScheduleSchema>(
  "api/addOrUpdateProxyRetriverSchedule",
  async (param: ProxyScheduleSchema, thunkAPI) => {
    try {
      const response = await AxiosAuth.post<boolean>(ClientApiRoutes.AddOrUpdateProxyRetriverSchedule, param);
      return { status: 200, response: response.data };
    } catch (error) {
      console.log(error);

      return { status: 200, error: "error" };
    }
  }
);
