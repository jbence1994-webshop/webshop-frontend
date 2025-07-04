import * as React from "react";

const Products: React.FC<ProductsProps> = ({ pageName }) => {
  return (
    <>
      <section className={pageName}></section>
    </>
  );
};

export default Products;
