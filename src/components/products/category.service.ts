import axios from "axios";

import { appConfig } from "@components/common/app.config";
import type { Category } from "@components/products/category";

const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get<Category[]>(
    `${appConfig.backendUrl}/categories`,
  );
  return data;
};

export { getCategories };
