import { Router } from 'express';

import SessionRestauranteController from '../app/controllers/sessions/SessionRestauranteController';

class SessionRestauranteRouter {
  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  setRoutes() {
    this.router
      .route('/sessions-restaurantes')
      .post(SessionRestauranteController.store);
  }
}

export default new SessionRestauranteRouter().router;
