import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const auth = () => {
  return false;
}

interface Props {
  component?: () => JSX.Element;
  path: string;
};


const PrivateRoute = (props: Props) => {
   return (!auth()) ? 
    (<Redirect to="/" />) : 
    (<Route component={props.component} path={props.path} />)
}

export default PrivateRoute;
