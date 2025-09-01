import axios from "axios";

import type { Product } from "@models/product";

import { appConfig } from "@config/app.config";

const getProducts = async (categoryId?: number): Promise<Product[]> => {
  let endpoint = `${appConfig.backendUrl}/products`;
  if (categoryId != null && categoryId != -1) {
    endpoint = `${endpoint}?categoryId=${categoryId}`;
  }

  const { data } = await axios.get<Product[]>(endpoint);
  return data;
};

export { getProducts };
