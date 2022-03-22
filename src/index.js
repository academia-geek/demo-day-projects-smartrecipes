import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoblalStyles } from './styles/styledComponents/goblalStyles';




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GoblalStyles />
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

