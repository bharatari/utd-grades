import React from 'react';
import { Route } from 'react-router';
import Home from './Home';

export default ({ store }) => (
  <div>
    <Route path="/" exact component={Home(store)} />
  </div>
);
