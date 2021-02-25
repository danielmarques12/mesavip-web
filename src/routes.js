import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ListaDeRestaurantes from './pages/ListaDeRestaurantes';
import Agendamento from './pages/Agendamento';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/restaurantes" component={ListaDeRestaurantes} />
        <Route path="/restaurantes/:id" component={Agendamento} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
