import Card from "@components/common/Card";

import type { Product } from "@models/product";

import noImage from "@assets/no-image.png";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { id, name, price, unit } = product;

  return (
    <>
      <Card
        key={id}
        title={name}
        image={noImage}
        imageAlt={name}
        contents={[{ key: 1, value: `$${price} / ${unit}` }]}
      />
    </>
  );
};

export default ProductCard;
