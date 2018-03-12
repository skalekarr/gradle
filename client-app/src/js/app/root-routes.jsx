import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ErrorModal from '../components/Error/index';
import PolicyLookup from '../containers/PolicyLookUp/index';
import PolicySearchResult from '../containers/PolicySearchResult';

/* eslint-disble import/no-named-as-default */
const RootRoutes = ({ match: { path }, location: { pathname } }) => (
  <div>
    <Header />
    <ErrorModal />
    <Switch>
      <Route exact path={path} component={PolicyLookup} />
      <Route path={pathname} component={PolicySearchResult} />
    </Switch>
    <Footer />
  </div>
);

RootRoutes.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default RootRoutes;
