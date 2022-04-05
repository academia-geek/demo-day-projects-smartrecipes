import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoblalStyles } from './styles/styledComponents/goblalStyles';
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

