import React from 'react';
import { Route } from 'react-router-dom';
import { isAuthenticated, authenticate } from 'util/api';

type AuthenticatedRoutePropTypes = {
  path: string;
  [key: string]: unknown;
};

const AuthenticatedRoute = ({ path, ...props }: AuthenticatedRoutePropTypes): JSX.Element => {
  if (!isAuthenticated()) {
    authenticate(path);
    return <div>Loading</div>;
  }

  return <Route {...props} />;
};

export default AuthenticatedRoute;
