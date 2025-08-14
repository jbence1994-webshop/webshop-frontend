import type { ProductPhoto } from "@models/productPhoto";

export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  photo: ProductPhoto;
}
