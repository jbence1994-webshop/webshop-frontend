import ProductCard from "./ProductCard";

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Product#1",
      price: 99.99,
      unit: "pcs",
      description: "Sample text.",
    },
    {
      id: 2,
      name: "Product#2",
      price: 100.99,
      unit: "pcs",
      description: "Sample text.",
    },
    {
      id: 3,
      name: "Product#3",
      price: 99.99,
      unit: "pcs",
      description: "Sample text.",
    },
  ];

  return (
    <>
      <section className="row">
        {products.map((product) => (
          <article className="col-lg-4 col-sm-12">
            <ProductCard product={product} />
          </article>
        ))}
      </section>
    </>
  );
};

export default Products;
