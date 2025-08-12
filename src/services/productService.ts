import type { Product } from "@models/product";

import axiosInstance from "@config/axiosConfig";

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products");
  return response.data;
};

export { getProducts };
