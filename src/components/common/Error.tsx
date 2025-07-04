import image from "../../assets/unplugged_cable.jpg";

const Error = () => {
  return (
    <section className="row">
      <article className="col-12">
        <div className="text-center">
          <img src={image} alt="logo" style={{ width: "50%", height: "50%" }} />
          <h1>Oops!</h1>
          <h2>Page not found.</h2>
        </div>
      </article>
    </section>
  );
};

export default Error;
