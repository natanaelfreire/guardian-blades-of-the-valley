import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Client from './pages/Client';

import isAuthenticated from './auth';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/create-account' component={CreateAccount} />
        <Route path='/client' render={() => (isAuthenticated() ? <Client /> : <Redirect to="/" />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;