import { useEffect, useState } from "react";

import Card from "@components/common/Card";

import { getProducts } from "@services/productService";

import type { Product } from "@models/product";

import noImage from "@assets/no-image.png";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="col-9">
      <div className="row">
        {products.map(({ id, name, price, unit }) => (
          <article
            key={id}
            className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12"
          >
            <Card
              key={id}
              title={name}
              image={noImage}
              imageAlt={name}
              contents={[{ key: 1, value: `$${price} / ${unit}` }]}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
