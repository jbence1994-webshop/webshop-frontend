import type { KeyValuePair } from "../types/common/types.ts";

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

export { HOME_PAGE, PRODUCTS_PAGE, ERROR_PAGE, ALL_PATHS };
