import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './redux/store/store';
<<<<<<< HEAD


import './styles/css/index.css';
=======
>>>>>>> 01a6106439960e338759a2071eedb86df441f10c
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GoblalStyles />
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

