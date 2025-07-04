import { useEffect } from "react";

import { APPLICATION_NAME } from "../constants/appConfig";

const App = () => {
  useEffect(() => {
    document.title = APPLICATION_NAME;
  }, []);

  return (
    <>
      <h1>{APPLICATION_NAME}</h1>
    </>
  );
};

export default App;
