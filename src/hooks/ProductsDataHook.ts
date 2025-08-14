import { useEffect, useState } from "react";

import { getProducts } from "@services/productService";

import type { Product } from "@models/product";

export function ProductDataHook() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const initializeProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    initializeProducts();
  }, []);

  return { products };
}
