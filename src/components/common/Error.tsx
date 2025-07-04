import type { FC } from "react";

const Error: FC<PageProps> = ({ name }) => {
  return (
    <section>
      <p>${name}</p>
    </section>
  );
};

export default Error;
