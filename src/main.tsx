import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/components/App.tsx';
import { appConfig } from '@/components/common/app.config.ts';

import '@/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App name={appConfig.applicationName} />
  </StrictMode>
);
