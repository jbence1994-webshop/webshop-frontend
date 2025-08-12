import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./common/Navbar.tsx";
import Home from "./common/Home.tsx";
import Products from "./products/Products.tsx";
import Error from "./common/Error.tsx";
import {
  ALL_PATHS,
  ERROR_PAGE,
  HOME_PAGE,
  PRODUCTS_PAGE,
} from "../config/routes.ts";

interface Props {
  name: string;
}

const App = ({ name }: Props) => {
  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <BrowserRouter>
      <header>
        <Navbar
          applicationName={name}
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
