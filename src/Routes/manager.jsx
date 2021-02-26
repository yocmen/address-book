import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from '../Context/Provider';
import HomePage from '../Pages/Home';

const RoutesManager = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default RoutesManager;
