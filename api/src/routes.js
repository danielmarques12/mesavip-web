import { Router } from 'express';

import ClienteController from './app/controllers/ClienteController';
import RestauranteController from './app/controllers/RestauranteController';
import AgendamentoController from './app/controllers/AgendamentoController';
import HorarioController from './app/controllers/HorarioController';

const routes = new Router();

routes.post('/clientes', ClienteController.store);

routes.get('/restaurantes', RestauranteController.index);
routes.post('/restaurantes', RestauranteController.store);

routes.post('/agendamentos', AgendamentoController.store);

routes.post('/horarios', HorarioController.store);
routes.get('/horarios', HorarioController.index);

export default routes;
