import axios from "axios";
import { AxiosAuthInjector, RedirectUnauthorized } from "./libs/axiosAuthInjector";

export const AxiosAuth = axios.create();

AxiosAuthInjector.Add(AxiosAuth);

RedirectUnauthorized.Add(AxiosAuth);
