import React from 'react';
import { Route } from 'react-router';
import Home from './Home';
import Section from './Section';

export default ({ store }) => (
  <React.Fragment>
    <Route path="/" exact component={Home(store)} />
    <Route path="/app/section/:id" component={Section} />
  </React.Fragment>
);
