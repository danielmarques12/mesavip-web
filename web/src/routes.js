import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ClienteSignUp from './pages/Cliente/ClienteSignUp';
import RestauranteSignUp from './pages/Restaurante/RestauranteSignUp';
import ListaDeRestaurantes from './pages/Restaurante/ListaDeRestaurantes';
import Agendamento from './pages/Agendamento';
import ClienteLogin from './pages/Cliente/ClienteLogin';
import RestauranteLogin from './pages/Restaurante/RestauranteLogin';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cliente-login" component={ClienteLogin} />
        <Route path="/cliente-sign-up" component={ClienteSignUp} />
        <Route path="/restaurante-login" component={RestauranteLogin} />
        <Route path="/restaurante-sign-up" component={RestauranteSignUp} />
        <Route exact path="/restaurantes" component={ListaDeRestaurantes} />
        <Route path="/restaurantes/:id" component={Agendamento} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
