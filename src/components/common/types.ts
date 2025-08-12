type Page = {
  name: string;
  path: string;
};

type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

export type { Page, KeyValuePair };
