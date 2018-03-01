import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';

const RootRoutes = () => (
  <div>
    <Route path="/" component={Header} />
    <Switch>
      <Redirect from="/" to="/" />
    </Switch>
    <Route path="/" component={Footer} />
  </div>
);

export default RootRoutes;
