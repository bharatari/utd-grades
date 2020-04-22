import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/';

import './styles/index.css';
import 'antd/dist/antd.css';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(  
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    MOUNT_NODE,
  );
};

render();
