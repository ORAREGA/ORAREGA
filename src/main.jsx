import React from 'react';
import { createRoot } from 'react-dom/client'; // 👈 updated import
import App from './App';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.css';

const container = document.getElementById('root'); // 👈 get root DOM node
const root = createRoot(container); // 👈 create React 18 root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
