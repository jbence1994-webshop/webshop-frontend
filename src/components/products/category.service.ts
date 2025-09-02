import axios from 'axios';

import { appConfig } from '@/components/common/app.config.ts';
import type { Category } from '@/components/products/category.ts';

const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get<Category[]>(
    `${appConfig.backendUrl}/categories`
  );
  return data;
};

export { getCategories };
