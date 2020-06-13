import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('gb-token') || undefined;

  return token ? true : false;
}

interface Props {
  component: () => JSX.Element;
  path: string;
};

const PrivateRoute = (props: Props) => {
   return (isAuthenticated()) ? 
    (<Route component={props.component} path={props.path} />) :
    (<Redirect to="/" />)
}

export default PrivateRoute;
