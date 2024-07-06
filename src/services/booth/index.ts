import { axiosInstance } from "../axios";
import { BoothList, NewBooth } from "./types";

export const getBoothList = () => axiosInstance.get<BoothList>("/panel/booth");

export const newBooth = (payload: NewBooth) =>
  axiosInstance.post("/panel/booth", payload);

export const getBoothById = (id: string) =>
  axiosInstance.get<NewBooth>(`/panel/booth/${id}`);

export const updateBoothById = ({
  id,
  payload,
}: {
  id: string;
  payload: NewBooth;
}) => {
  return axiosInstance.patch(`/panel/booth/${id}`, payload);
};
