/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPLICATION_NAME: string;
  readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
