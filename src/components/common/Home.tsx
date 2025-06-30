import * as React from "react";

const Main: React.FC<MainProps> = ({ pageProps }) => {
  return <section className={pageProps.name}></section>;
};

export default Main;
