import Categories from "@components/products/Categories";
import Products from "@components/products/Products";

const ProductsPage = () => {
  return (
    <div className="row">
      <Categories />
      <Products />
    </div>
  );
};

export default ProductsPage;
