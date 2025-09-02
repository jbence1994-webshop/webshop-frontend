import type { ProductPhoto } from "@components/products/productPhoto";

export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  photo: ProductPhoto;
}
