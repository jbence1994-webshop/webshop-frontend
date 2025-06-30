/// <reference types="vite/client" />

interface AppProps {
  appName: string;
}

interface NavbarProps {
  title: string;
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
  linkProperties: KeyValuePair<string, string>;
}
