import axiosInstance from "axios";
import { BACKEND_URL } from "../constants/appConfig.ts";

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>(
    `${BACKEND_URL}/products`,
  );
  return response.data;
};

export { getProducts };
