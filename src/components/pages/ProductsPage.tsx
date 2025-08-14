import { useEffect, useState } from "react";

import Categories from "@components/products/Categories";
import Products from "@components/products/Products";

import { getCategories } from "@services/categoriesService";
import { getProducts } from "@services/productService";

import type { Category } from "@models/category";
import type { Product } from "@models/product";

const ProductsPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    initializeData();
  }, []);

  return (
    <div className="row">
      <Categories data={categories} />
      <Products data={products} />
    </div>
  );
};

export default ProductsPage;
