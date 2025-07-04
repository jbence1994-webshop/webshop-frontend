import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./common/Navbar";
import Home from "./common/Home";
import SamplePage from "./SamplePage";
import Error from "./common/Error";

import { APPLICATION_NAME } from "../constants/appConfig";
import {
  ALL_PATHS,
  ERROR_PAGE,
  HOME_PAGE,
  SAMPLE_PAGE,
} from "../constants/routes";

const App = () => {
  useEffect(() => {
    document.title = APPLICATION_NAME;
  }, []);

  return (
    <BrowserRouter>
      <header>
        <Navbar
          applicationName={APPLICATION_NAME}
          homePagePath={HOME_PAGE.value}
          pages={[
            {
              name: SAMPLE_PAGE.key,
              path: SAMPLE_PAGE.value,
            },
          ]}
        />
      </header>
      <main className="container">
        <Routes>
          <Route
            path={HOME_PAGE.value}
            element={<Home name={HOME_PAGE.key} />}
          />
          <Route
            path={SAMPLE_PAGE.value}
            element={<SamplePage name={SAMPLE_PAGE.key} />}
          />
          <Route
            path={ERROR_PAGE.value}
            element={<Error name={ERROR_PAGE.key} />}
          />
          <Route
            path={ALL_PATHS}
            element={<Navigate to={ERROR_PAGE.value} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
