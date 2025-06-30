/// <reference types="vite/client" />

interface AppProps {
  appName: string;
}

interface NavbarProps {
  displayTitle: string;
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
