import Card from "@components/common/Card";
import type { Product } from "@components/products/product";

import noImage from "@assets/no-image.png";

interface Props {
  data: Product[];
}

const Products = ({ data }: Props) => {
  return (
    <div className="row">
      {data.map(({ id, name, price, unit, photo }) => (
        <article
          key={id}
          className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"
        >
          <Card
            key={id}
            title={name}
            image={photo !== null ? photo.url : noImage}
            imageAlt={name}
            contents={[{ key: 1, value: `$${price} / ${unit}` }]}
          />
        </article>
      ))}
    </div>
  );
};

export default Products;
