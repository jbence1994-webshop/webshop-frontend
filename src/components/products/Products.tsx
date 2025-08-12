import { useEffect, useState } from "react";

import ProductCard from "@components/products/ProductCard";

import { getProducts } from "@services/productService";

import type { Product } from "@models/product";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        /* empty */
      }
    };

    getAllProducts();
  }, []);

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
