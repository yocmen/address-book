import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from '../Context/Provider';
import HomePage from '../Pages/Home';
import SettingsPage from '../Pages/Settings';

const RoutesManager = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/settings" component={SettingsPage} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default RoutesManager;
