import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./common/Navbar";
import Home from "./common/Home";
import Products from "./products/Products";
import Error from "./common/Error";

import { APPLICATION_NAME } from "../constants/appConfig";
import {
  HOME_PAGE,
  PRODUCTS_PAGE,
  ERROR_PAGE,
  ALL_PATHS,
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
              name: PRODUCTS_PAGE.key,
              path: PRODUCTS_PAGE.value,
            },
          ]}
        />
      </header>
      <main className="container">
        <Routes>
          <Route path={HOME_PAGE.value} element={<Home />} />
          <Route path={PRODUCTS_PAGE.value} element={<Products />} />
          <Route path={ERROR_PAGE.value} element={<Error />} />
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
