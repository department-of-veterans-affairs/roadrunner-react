import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

import LandingPage from './LandingPage';

class RoadrunnerApp extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={LandingPage} path="/"/>
      </Router>
    );
  }
}

export default RoadrunnerApp;
