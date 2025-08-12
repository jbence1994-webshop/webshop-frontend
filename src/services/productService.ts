import axiosInstance from "@config/axiosConfig";
import type { Product } from "@models/product";

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products");
  return response.data;
};

export { getProducts };
