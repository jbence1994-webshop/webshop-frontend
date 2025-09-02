import { useEffect, useState } from 'react';

import { getProducts } from '@/components/products/product.service.ts';
import type { Product } from '@/components/products/product.ts';

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
