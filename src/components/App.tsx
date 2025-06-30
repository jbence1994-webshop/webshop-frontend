import * as React from "react";

const App: React.FC<AppProps> = ({ appName }) => {
  return (
    <>
      <h1>{appName}</h1>
    </>
  );
};

export default App;
