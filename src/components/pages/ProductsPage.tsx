import Categories from "@components/products/Categories";
import Products from "@components/products/Products";

import { CategoriesDataHook } from "@hooks/CategoriesDataHook";
import { ProductDataHook } from "@hooks/ProductsDataHook";

const ProductsPage = () => {
  const { categories } = CategoriesDataHook();
  const { products } = ProductDataHook();

  return (
    <div className="row">
      <Categories data={categories} />
      <Products data={products} />
    </div>
  );
};

export default ProductsPage;
