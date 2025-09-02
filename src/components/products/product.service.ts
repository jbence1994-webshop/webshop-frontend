import axios from 'axios';

import { appConfig } from '@/components/common/app.config.ts';
import type { Product } from '@/components/products/product.ts';

const getProducts = async (categoryId?: number): Promise<Product[]> => {
  let endpoint = `${appConfig.backendUrl}/products`;
  if (categoryId != null && categoryId != -1) {
    endpoint = `${endpoint}?categoryId=${categoryId}`;
  }

  const { data } = await axios.get<Product[]>(endpoint);
  return data;
};

export { getProducts };
