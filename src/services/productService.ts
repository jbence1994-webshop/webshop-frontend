import type { Product } from "@models/product";

import axiosInstance from "@config/axiosConfig";

const getProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>("/products");
  return data;
};

export { getProducts };
