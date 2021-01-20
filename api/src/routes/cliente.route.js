import { Router } from 'express';

import ClienteController from '../app/controllers/ClienteController';

class ClienteRouter {
  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  setRoutes() {
    this.router.route('/clientes').post(ClienteController.store);
  }
}

export default new ClienteRouter().router;
