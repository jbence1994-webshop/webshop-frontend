import * as React from "react";

const Products: React.FC<ProductsProps> = ({ pageProps }) => {
  return (
    <>
      <section className={pageProps.name}></section>
    </>
  );
};

export default Products;
