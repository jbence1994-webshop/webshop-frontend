import { useEffect, useState } from "react";

import ProductCard from "@components/products/ProductCard";
import { getProducts } from "@services/productService";
import type { Product } from "@models/product";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, []);

  if (loading) return <p className="mt-3">Loading...</p>;

  return (
    <>
      <section className="row">
        {products.map((product) => (
          <article
            key={product.id}
            className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12"
          >
            <ProductCard product={product} />
          </article>
        ))}
      </section>
    </>
  );
};

export default Products;
