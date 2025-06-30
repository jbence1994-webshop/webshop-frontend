import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router";

import Navbar from "./common/Navbar.tsx";
import Main from "./Main.tsx";
import Products from "./Products.tsx";
import Error from "./Error.tsx";

import {
  MAIN_PAGE,
  PRODUCTS_PAGE,
  ERROR_PAGE,
  ALL_PATHS,
} from "../app.constants.ts";

const App: React.FC<AppProps> = ({ appName }) => {
  return (
    <>
      <BrowserRouter>
        <Navbar displayTitle={appName} />
        <main>
          <Routes>
            <Route
              path={MAIN_PAGE.value}
              element={<Main pageName={MAIN_PAGE.key} />}
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
