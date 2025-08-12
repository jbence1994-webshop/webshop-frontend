import axiosInstance from "@config/axiosConfig";
import type { ProductPhoto } from "@models/productPhoto";

const getProductPhotos = async (productId: number): Promise<ProductPhoto[]> => {
  const { data } = await axiosInstance.get<ProductPhoto[]>(
    `/products/${productId}/photos`,
  );
  return data;
};

export { getProductPhotos };
