import React from 'react';
import { Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import history from './services/history';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoclose={2000} />
    </Router >
  );
}

export default App;
