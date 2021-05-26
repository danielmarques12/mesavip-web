import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Restaurant from './pages/Restaurant';
import RestaurantsList from './pages/RestaurantsList';
import Reservations from './pages/Reservations';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          restricted={false}
          exact
          path="/"
          component={RestaurantsList}
        />
        <PublicRoute
          restricted={false}
          path="/restaurants/:id"
          component={Restaurant}
        />
        <PublicRoute restricted exact path="/login" component={Login} />
        <PublicRoute restricted exact path="/signup" component={SignUp} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/reservations" exact component={Reservations} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
