import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { isAuthenticated, authenticate } from 'util/api';

type AuthenticatedRoutePropTypes = {
  path: string;
  [key: string]: unknown;
};

const AuthenticatedRoute = ({ path, ...props }: AuthenticatedRoutePropTypes): JSX.Element => {
  const { pathname } = useLocation();

  if (!isAuthenticated()) {
    authenticate(pathname);
    return <div>Loading</div>;
  }

  return <Route path={path} {...props} />;
};

export default AuthenticatedRoute;
