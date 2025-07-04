import type { FC } from "react";

const Home: FC<PageProps> = ({ name }) => {
  return (
    <section>
      <p>${name}</p>
    </section>
  );
};

export default Home;
