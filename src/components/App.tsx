import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ErrorPage from "@components/common/ErrorPage";
import HomePage from "@components/common/HomePage";
import Navbar from "@components/common/Navbar";
import {
  ALL_PATHS,
  ERROR_PAGE,
  HOME_PAGE,
  PRODUCTS_PAGE,
} from "@components/common/routes";
import ProductsPage from "@components/products/ProductsPage";

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
              key: PRODUCTS_PAGE.key,
              value: PRODUCTS_PAGE.value,
            },
          ]}
        />
      </header>
      <main className="container">
        <Routes>
          <Route path={HOME_PAGE.value} element={<HomePage />} />
          <Route path={PRODUCTS_PAGE.value} element={<ProductsPage />} />
          <Route path={ERROR_PAGE.value} element={<ErrorPage />} />
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
