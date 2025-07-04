/// <reference types="vite/client" />

interface NavbarProps {
  applicationName: string;
  homePagePath: string;
  pages: Page[];
}

interface Page {
  name: string;
  path: string;
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
