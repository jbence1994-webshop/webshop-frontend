import * as React from "react";

const Error: React.FC<ErrorProps> = ({ pageProps }) => {
  return (
    <section>
      <h1>{pageProps.name}</h1>
    </section>
  );
};

export default Error;
