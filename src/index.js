import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContentProvider } from './store/auth-context';

ReactDOM.render(
  <AuthContentProvider>
    <App />
  </AuthContentProvider>,
  document.getElementById('root'),
);
