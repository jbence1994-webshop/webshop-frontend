/// <reference types="vite/client" />

interface AppProps {
  appName: string;
}

interface NavbarProps {
  homePage: Page;
  pages: Page[];
}

interface MainProps {
  pageProps: PageProps;
}

interface ProductsProps {
  pageProps: PageProps;
}

interface ProductCardProps {
  products: Product[];
}

interface ErrorProps {
  pageProps: PageProps;
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

interface PageProps {
  name: string;
}
