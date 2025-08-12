import type { KeyValuePair } from "@models/key-value-pair";

const HOME_PAGE: KeyValuePair<string, string> = {
  key: "Home",
  value: "/",
};

const PRODUCTS_PAGE: KeyValuePair<string, string> = {
  key: "Products",
  value: "/products",
};

const ERROR_PAGE: KeyValuePair<string, string> = {
  key: "Error",
  value: "/error",
};

const ALL_PATHS = "*";

export { ALL_PATHS, ERROR_PAGE, HOME_PAGE, PRODUCTS_PAGE };
