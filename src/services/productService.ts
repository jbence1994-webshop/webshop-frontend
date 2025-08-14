import type { Product } from "@models/product";

import axiosInstance from "@config/axiosConfig";

const getProducts = async (categoryId?: number): Promise<Product[]> => {
  let endpoint = "/products";
  if (categoryId != null && categoryId != -1) {
    endpoint = `${endpoint}?categoryId=${categoryId}`;
  }

  const { data } = await axiosInstance.get<Product[]>(endpoint);
  return data;
};

export { getProducts };
