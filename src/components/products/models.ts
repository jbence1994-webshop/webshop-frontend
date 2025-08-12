interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  description: string;
}

interface ProductPhoto {
  url: string;
}

export type { Product, ProductPhoto };
