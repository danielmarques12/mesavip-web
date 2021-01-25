import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ClienteSignUp from './pages/ClienteSignUp';
import RestauranteSignUp from './pages/RestauranteSignUp';
import Restaurantes from './pages/Restaurantes';
import Agendamento from './pages/Agendamento';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cliente-sign-up" component={ClienteSignUp} />
        <Route path="/restaurante-sign-up" component={RestauranteSignUp} />
        <Route exact path="/restaurantes" component={Restaurantes} />
        <Route path="/restaurantes/:id" component={Agendamento} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
