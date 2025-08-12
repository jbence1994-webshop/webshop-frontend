import { useEffect, useState } from "react";

import Badge from "../common/Badge.tsx";
import Card from "../common/Card.tsx";
import type { Product, ProductPhoto } from "../../types/products/models.ts";
import { getProductPhotos } from "../../services/productPhotoService";
import noImage from "../../assets/no-image.png";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { id, name, price, unit } = product;

  const [images, setImages] = useState<ProductPhoto[]>([]);

  useEffect(() => {
    const getAllProductPhotos = async () => {
      try {
        const data = await getProductPhotos(id);
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllProductPhotos();
  }, [id]);

  let image: string;

  if (images.length !== 0) {
    image = images[0].url;
  } else {
    image = noImage;
  }

  return (
    <>
      <Card
        key={id}
        title={name}
        image={image}
        imageAlt={name}
        contents={[]}
        elements={[<Badge noMargin={true} content={`$${price} / ${unit}`} />]}
      />
    </>
  );
};

export default ProductCard;
