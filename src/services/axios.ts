import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosParams: AxiosRequestConfig = {
  baseURL: "http://localhost:3002",
};

export const axiosInstance = axios.create(axiosParams);
