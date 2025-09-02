import type { ProductPhoto } from '@/components/products/productPhoto.ts';

export type Product = {
  id: number;
  name: string;
  price: number;
  unit: string;
  photo: ProductPhoto;
};
