import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Perfil from './pages/Perfil';
import Restaurante from './pages/Restaurante';
import ListaDeRestaurantes from './pages/ListaDeRestaurantes';
import MyScheduling from './pages/MyScheduling';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          restricted={false}
          exact
          path="/"
          component={ListaDeRestaurantes}
        />
        <PublicRoute
          restricted={false}
          path="/restaurantes/:id"
          component={Restaurante}
        />
        <PublicRoute restricted exact path="/login" component={Login} />
        <PublicRoute restricted exact path="/sign-up" component={SignUp} />
        <PrivateRoute path="/perfil" exact component={Perfil} />
        <PrivateRoute path="/my-scheduling" exact component={MyScheduling} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
