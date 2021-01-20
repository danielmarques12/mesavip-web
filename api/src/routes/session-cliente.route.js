import { Router } from 'express';

import SessionClienteController from '../app/controllers/sessions/SessionClienteController';

class SessionClienteRouter {
  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  setRoutes() {
    this.router
      .route('/sessions-clientes')
      .post(SessionClienteController.store);
  }
}

export default new SessionClienteRouter().router;
