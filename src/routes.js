
import React from 'react'
import { Route } from 'react-router'

import Error404 from './Containers/404'

export default () => {
  const routes = (    
    <Route path="*" component={Error404} />
  );
  return routes;
};
