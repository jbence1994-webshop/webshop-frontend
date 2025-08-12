import axiosInstance from "axios";

import type { ProductPhoto } from "../components/products/models.ts";
import { BACKEND_URL } from "../constants/appConfig.ts";

const getProductPhotos = async (productId: number): Promise<ProductPhoto[]> => {
  const response = await axiosInstance.get<ProductPhoto[]>(
    `${BACKEND_URL}/products/${productId}/photos`,
  );
  return response.data;
};

export { getProductPhotos };
