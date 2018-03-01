import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import PolicyLookup from '../PolicyLookup/PolicyLookup';

const RootRoutes = () => (
  <div>
    <Route path="/" component={Header} />
    <Switch>
      <Route path="/" component={PolicyLookup} />
      <Redirect from="/" to="/PolicyLookup" />
    </Switch>
    <Route path="/" component={Footer} />
  </div>
);

export default RootRoutes;
