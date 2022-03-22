import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './redux/store/store';


import './styles/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
<<<<<<< HEAD
=======
      <GoblalStyles />
>>>>>>> 7a348b2f19302e48e1f415266228519ccfd47656
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

