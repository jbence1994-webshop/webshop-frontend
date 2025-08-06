import ProductCard from "./ProductCard";

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Product#1",
      price: 99.99,
      unit: "pieces",
      description: "Sample text.",
    },
    {
      id: 2,
      name: "Product#2",
      price: 99.99,
      unit: "pieces",
      description: "Sample text.",
    },
    {
      id: 3,
      name: "Product#3",
      price: 99.99,
      unit: "pieces",
      description: "Sample text.",
    },
    {
      id: 4,
      name: "Product#4",
      price: 99.99,
      unit: "pieces",
      description: "Sample text.",
    },
  ];

  return (
    <>
      <section className="row">
        {products.map((product) => (
          <article
            key={product.id}
            className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12"
          >
            <ProductCard product={product} />
          </article>
        ))}
      </section>
    </>
  );
};

export default Products;
