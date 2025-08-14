import Card from "@components/common/Card";

import type { Product } from "@models/product";

import noImage from "@assets/no-image.png";

interface Props {
  data: Product[];
}

const Products = ({ data }: Props) => {
  return (
    <section className="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12">
      <div className="row">
        {data.map(({ id, name, price, unit, category }) => (
          <article
            key={id}
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12"
          >
            <Card
              key={id}
              title={name}
              image={noImage}
              imageAlt={name}
              contents={[
                { key: 1, value: category },
                { key: 2, value: `$${price} / ${unit}` },
              ]}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
