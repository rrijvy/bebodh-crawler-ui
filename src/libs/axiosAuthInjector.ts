import { signOut } from "@/auth";
import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface AxiosCustomHeaders {
  ["authorization"]?: string;
}

export class AxiosAuthInjector {
  static Add(instance: AxiosInstance): number {
    const onRequest = async (requestConfig: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig<AxiosCustomHeaders>> => {
      const session = await getSession();

      const authHeader: AxiosCustomHeaders = { authorization: "" };

      if (session?.token) authHeader.authorization = `Bearer ${session.token}`;

      if (authHeader.authorization) requestConfig.headers.Authorization = authHeader.authorization;

      return requestConfig;
    };

    const onRequestError = (error: AxiosError): Promise<AxiosError> => {
      return Promise.reject(error);
    };

    return instance.interceptors.request.use(onRequest, onRequestError);
  }

  /**
   * @static @function Remove() Eject the interceptor from the Axios instance
   * @param {AxiosInstance} instance Instance of Axios
   * @param {number} id Interceptor Id
   */
  static Remove(instance: AxiosInstance, id: number): void {
    instance.interceptors.request.eject(id);
  }
}

export class RedirectUnauthorized {
  static Add(instance: AxiosInstance, redirectTo?: string, onRedir?: () => void): number {
    const onError = (error: AxiosError<unknown, unknown>) => {
      if (error.response?.status === 401) {
        signOut();
      }
    };

    return instance.interceptors.response.use((r) => r, onError);
  }
}
