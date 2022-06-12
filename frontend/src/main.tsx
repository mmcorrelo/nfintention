import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/App/App';
import { Provider } from 'react-redux';

import './index.css';

import reportWebVitals from './reportWebVitals';

import { AuthContextProvider } from './contexts/AuthContext';
import { store } from './features/App/App.store';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Provider>
);

reportWebVitals();
