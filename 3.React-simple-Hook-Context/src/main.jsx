import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { CounterStateProvider } from './context/counter/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterStateProvider>
      <App />
    </CounterStateProvider>
  </React.StrictMode>,
);
