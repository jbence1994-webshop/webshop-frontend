import type { Category } from "@models/category";

import axiosInstance from "@config/axiosConfig";

const getCategories = async (): Promise<Category[]> => {
  const { data } = await axiosInstance.get<Category[]>("/categories");
  return data;
};

export { getCategories };
