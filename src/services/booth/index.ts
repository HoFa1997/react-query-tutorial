import { axiosInstance } from "../axios";
import { BoothList, NewBooth } from "./types";

export const getBoothList = () => axiosInstance.get<BoothList>("/panel/booth");

export const newBooth = (payload: NewBooth) =>
  axiosInstance.post<BoothList>("/panel/booth", payload);
