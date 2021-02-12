import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterWeb from './__COMPONENT/__MAIN/0.RouterWeb/RouterWeb'
import { Provider } from 'react-redux'
import {store }from './_STORE'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterWeb/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
