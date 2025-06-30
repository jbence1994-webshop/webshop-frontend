/// <reference types="vite/client" />

interface AppProps {
  appName: string;
}

interface NavbarProps {
  homePage: Page;
  pages: Page[];
}

interface MainProps {
  pageName: string;
}

interface ProductsProps {
  pageName: string;
}

interface ErrorProps {
  pageName: string;
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

interface Page {
  title: string;
  key: string;
  href: string;
}
