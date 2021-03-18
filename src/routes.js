import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ListaDeRestaurantes from './pages/ListaDeRestaurantes';
import Restaurante from './pages/Restaurante';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListaDeRestaurantes} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/restaurantes/:id" component={Restaurante} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
