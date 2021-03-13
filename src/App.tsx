import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Auth from 'pages/Auth';
import Registration from 'pages/Registration';
import StaticFileRedirect from 'components/StaticFileRedirect';
import AuthenticatedRoute from 'components/AuthenticatedRoute';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>

        <AuthenticatedRoute path="/register" exact>
          <Registration />
        </AuthenticatedRoute>

        <Route path="/sponsor" exact>
          <StaticFileRedirect to="/documents/sponsorship.pdf" />
        </Route>

        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
