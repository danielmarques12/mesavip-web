import { Router } from 'express';

import ClienteController from './app/controllers/ClienteController';
import RestauranteController from './app/controllers/RestauranteController';

const routes = new Router();

routes.post('/clientes', ClienteController.store);

routes.get('/restaurantes', RestauranteController.index);
routes.post('/restaurantes', RestauranteController.store);

export default routes;
