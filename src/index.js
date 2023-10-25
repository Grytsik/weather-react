import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalContextProvider from './Context/Context';
import './App.scss';
import './MediaQuery/MediaQuery.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <GlobalContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContextProvider>,
);
