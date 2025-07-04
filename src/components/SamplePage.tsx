import type { FC } from "react";

const SamplePage: FC<PageProps> = ({ name }) => {
  return (
    <section>
      <p>${name}</p>
    </section>
  );
};

export default SamplePage;
