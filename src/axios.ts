import axios from "axios";
import { AxiosAuthInjector } from "./libs/axiosAuthInjector";

export const AxiosAuth = axios.create();

AxiosAuthInjector.Add(AxiosAuth);
