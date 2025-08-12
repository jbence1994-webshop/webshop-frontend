import axiosInstance from "../config/axiosConfig.ts";
import type { ProductPhoto } from "../types/products/models.ts";

const getProductPhotos = async (productId: number): Promise<ProductPhoto[]> => {
  const { data } = await axiosInstance.get<ProductPhoto[]>(
    `/products/${productId}/photos`,
  );
  return data;
};

export { getProductPhotos };
