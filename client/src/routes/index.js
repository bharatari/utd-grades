import React from 'react';
import { Route } from 'react-router';
import Home from './Home';
import Results from './Results';

export default () => (
  <React.Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/app/results" component={Results} />
  </React.Fragment>
);
