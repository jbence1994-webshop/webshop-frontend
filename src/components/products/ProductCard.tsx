import { useEffect, useState } from "react";

import Card from "@components/common/Card";

import { getProductPhotos } from "@services/productPhotoService";

import type { Product } from "@models/product";
import type { ProductPhoto } from "@models/productPhoto";

import noImage from "@assets/no-image.png";

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
        contents={[{ key: 1, value: `$${price} / ${unit}` }]}
      />
    </>
  );
};

export default ProductCard;
