import * as React from "react";

const Error: React.FC<ErrorProps> = ({ pageName }) => {
  return (
    <section>
      <h1>{pageName}</h1>
    </section>
  );
};

export default Error;
