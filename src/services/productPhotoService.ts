import type { ProductPhoto } from "@models/productPhoto";

import axiosInstance from "@config/axiosConfig";

const getProductPhotos = async (productId: number): Promise<ProductPhoto[]> => {
  const { data } = await axiosInstance.get<ProductPhoto[]>(
    `/products/${productId}/photos`,
  );
  return data;
};

export { getProductPhotos };
