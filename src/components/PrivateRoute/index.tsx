import React from 'react';

import Client from '../../pages/Client';

interface Props {
  component: Client; 
  path: string;
  render: () => void;
};

const PrivateRoute = (props: Props) => {
   return <></>
}

export default PrivateRoute;
