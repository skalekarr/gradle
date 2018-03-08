import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ErrorModal from '../components/Error/index';
import PolicyLookup from '../containers/PolicyLookUp/index';
import PolicySearchResult from '../containers/PolicySearchResult';

/* eslint-disble import/no-named-as-default */
const RootRoutes = () => (
  <div>
    <Route path="/" component={Header} />
    <ErrorModal />
    <Switch>
      <Route path="/" component={PolicyLookup} />
      <Route path="/search-result" component={PolicySearchResult} />
      <Redirect from="/" to="/PolicyLookup" />
    </Switch>
    <Route path="/" component={Footer} />
  </div>
);

export default RootRoutes;
