import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={CreateAccount} path='/create-account' />
    </BrowserRouter>
  );
}

export default Routes;