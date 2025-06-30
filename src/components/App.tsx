import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router";

import Error from "./common/Error.tsx";
import Home from "./common/Home.tsx";
import Navbar from "./common/Navbar.tsx";
import Products from "./products/Products.tsx";

import {
  HOME_PAGE,
  PRODUCTS_PAGE,
  ERROR_PAGE,
  ALL_PATHS,
} from "../app.constants.ts";

const App: React.FC<AppProps> = ({ appName }) => {
  const pages: Page[] = [
    { title: "Home", linkProperties: HOME_PAGE },
    { title: "Products", linkProperties: PRODUCTS_PAGE },
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar title={appName} pages={pages} />
        <main>
          <Routes>
            <Route
              path={HOME_PAGE.value}
              element={<Home pageName={HOME_PAGE.key} />}
            />
            <Route
              path={PRODUCTS_PAGE.value}
              element={<Products pageName={PRODUCTS_PAGE.key} />}
            />
            <Route
              path={ERROR_PAGE.value}
              element={<Error pageName={ERROR_PAGE.key} />}
            />
            <Route
              path={ALL_PATHS.value}
              element={<Navigate to={ERROR_PAGE.value} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
