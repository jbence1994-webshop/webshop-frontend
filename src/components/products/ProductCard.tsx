import type { FC } from "react";

import Badge from "../common/Badge";
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
        contents={[{ key: 1, value: description }]}
        elements={[<Badge noMargin={true} content={`$${price} / ${unit}`} />]}
      />
    </>
  );
};

export default ProductCard;
