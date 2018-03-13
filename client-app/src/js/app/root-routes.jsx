import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ErrorModal from '../components/Error/index';
import PolicyLookup from '../containers/PolicyLookUp/index';
import PolicySearchResult from '../containers/PolicySearchResult';
import PolicySummary from '../containers/PolicySummary/index';
import InterestCalc from '../containers/InterestCalc/index';

/* eslint-disble import/no-named-as-default */
const RootRoutes = () => (
  <div>
    <Header />
    <ErrorModal />
    <Switch>
      <Route exact path="/PolicyLookup" component={PolicyLookup} />
      <Route path="/PolicySearchResult" component={PolicySearchResult} />
      <Route path="/PolicySummary" component={PolicySummary} />
      <Route path="/InterestCalc" component={InterestCalc} />
    </Switch>
    <Footer />
  </div>
);

RootRoutes.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default RootRoutes;
