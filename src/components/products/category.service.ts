import axios from "axios";

import type { Category } from "@components/products/category";

import { appConfig } from "@config/app.config";

const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get<Category[]>(
    `${appConfig.backendUrl}/categories`,
  );
  return data;
};

export { getCategories };
