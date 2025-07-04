/// <reference types="vite/client" />

// common:

interface NavbarProps {
  applicationName: string;
  homePagePath: string;
  pages: Page[];
}

interface CardProps {
  title: string;
  image: string;
  imageAlt: string;
  contents: KeyValuePair<number, string>[];
}

interface Page {
  name: string;
  path: string;
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// products:

interface ProductCardProps {
  product: Product;
}

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  description: string;
}
