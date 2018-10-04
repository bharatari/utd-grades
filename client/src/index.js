import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'store/';
import Routes from 'routes/';

import './styles/index.css';
import 'antd/dist/antd.css';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes store={store} />
      </BrowserRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

render();
