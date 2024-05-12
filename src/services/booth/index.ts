import { axiosInstance } from "../axios";
import { BoothList } from "./types";

export const getBoothList = () => axiosInstance.get<BoothList>("/panel/booth");
