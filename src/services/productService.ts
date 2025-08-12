import axiosInstance from "axios";

import type { Product } from "../components/products/models.ts";
import { BACKEND_URL } from "../constants/appConfig.ts";

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>(
    `${BACKEND_URL}/products`,
  );
  return response.data;
};

export { getProducts };
