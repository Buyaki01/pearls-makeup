import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Makeup from './components/Makeup';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Makeup />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
