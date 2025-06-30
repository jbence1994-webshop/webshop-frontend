import * as React from "react";

const Main: React.FC<MainProps> = ({ pageName }) => {
  return <section className={pageName}></section>;
};

export default Main;
