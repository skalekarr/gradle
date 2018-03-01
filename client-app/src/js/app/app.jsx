import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import RootRoutes from './root-routes';
import { history } from './store.config';

import '../../styles/moo.css';
import '../../styles/styles.less';

const App = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RootRoutes />
    </ConnectedRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
