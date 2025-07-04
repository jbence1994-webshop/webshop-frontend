import type { FC } from "react";

import Card from "../common/Card";

import noImage from "../../assets/no-image.png";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, unit, description } = product;

  return (
    <>
      <Card
        key={id}
        title={name}
        image={noImage}
        imageAlt={name}
        contents={[
          { key: 1, value: description },
          { key: 2, value: `$${price}/${unit}` },
        ]}
      />
    </>
  );
};

export default ProductCard;
