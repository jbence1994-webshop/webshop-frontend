const Error = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <article className="row">
        <h1 className="display-1 fw-bold">404</h1>
        <h2 className="fw-semibold">Oops, This Page Not Found!</h2>
        <p className="text-muted">
          The link might be corrupted, or does not exist.
        </p>
      </article>
    </section>
  );
};

export default Error;
