import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App appName={import.meta.env.VITE_APP_NAME} />
  </StrictMode>,
);
