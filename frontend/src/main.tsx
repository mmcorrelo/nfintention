import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/App/App';
import { Provider } from 'react-redux';

import './index.css';

import reportWebVitals from './reportWebVitals';

import { MetamaskContextProvider } from './contexts/MetamaskContext';
import { store } from './features/App/App.store';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MetamaskContextProvider>
      <App />
    </MetamaskContextProvider>
  </Provider>
);

reportWebVitals();
