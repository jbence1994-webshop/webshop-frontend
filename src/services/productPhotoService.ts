import axiosInstance from "axios";

import { BACKEND_URL } from "../constants/appConfig";

const getProductPhotos = async (productId: number): Promise<ProductPhoto[]> => {
  const response = await axiosInstance.get<ProductPhoto[]>(
    `${BACKEND_URL}/products/${productId}/photos`,
  );
  return response.data;
};

export { getProductPhotos };
