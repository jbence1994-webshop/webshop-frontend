import { useEffect, useState } from "react";

import Categories from "@components/products/Categories";
import { CategoriesDataHook } from "@components/products/CategoriesDataHook";
import type { Product } from "@components/products/product";
import { getProducts } from "@components/products/product.service";
import Products from "@components/products/Products";
import { ProductDataHook } from "@components/products/ProductsDataHook";

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
      <aside className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
        <Categories
          data={categories}
          onCategorySelect={handleCategorySelected}
        />
      </aside>
      <section className="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12">
        <Products data={products} />
      </section>
    </div>
  );
};

export default ProductsPage;
