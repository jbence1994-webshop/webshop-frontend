import { useEffect, useState } from "react";

import Categories from "@components/products/Categories";
import Products from "@components/products/Products";

import { getProducts } from "@services/productService";

import type { Product } from "@models/product";

import { CategoriesDataHook } from "@hooks/CategoriesDataHook";
import { ProductDataHook } from "@hooks/ProductsDataHook";

const ProductsPage = () => {
  const { categories } = CategoriesDataHook();
  const { products: initialProducts } = ProductDataHook();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (initialProducts.length > 0) {
      setProducts(initialProducts);
    }
  }, [initialProducts]);

  const handleCategorySelected = async (categoryId: number) => {
    try {
      const data = await getProducts(categoryId);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <Categories data={categories} onCategorySelect={handleCategorySelected} />
      <Products data={products} />
    </div>
  );
};

export default ProductsPage;
