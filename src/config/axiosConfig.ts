import axios, { type AxiosInstance } from "axios";
import { appConfig } from "./appConfig.ts";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: appConfig.backendUrl,
  timeout: 10_000,
  headers: {},
});

export default axiosInstance;
