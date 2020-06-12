import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Client from './pages/Client';

import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={CreateAccount} path='/create-account' />
        <PrivateRoute component={Client} path='/client' />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;