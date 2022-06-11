import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/App';

import reportWebVitals from './reportWebVitals';
import { MetamaskContextProvider } from './contexts/MetamaskContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetamaskContextProvider>
      <App />
    </MetamaskContextProvider>
  </React.StrictMode>
);

reportWebVitals();
