import axiosInstance from "../config/axiosConfig.ts";
import type { Product } from "../types/products/models.ts";

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products");
  return response.data;
};

export { getProducts };
