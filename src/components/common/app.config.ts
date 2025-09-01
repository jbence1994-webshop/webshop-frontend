type AppConfig = {
  applicationName: string;
  backendUrl: string;
};

const appConfig: AppConfig = {
  applicationName: import.meta.env.VITE_APPLICATION_NAME,
  backendUrl: import.meta.env.VITE_BACKEND_URL,
};

export { appConfig };
