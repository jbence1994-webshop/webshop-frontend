/// <reference types="vite/client" />

interface Page {
  name: string;
  path: string;
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

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
