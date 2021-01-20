import { Router } from 'express';

import authMiddleware from '../app/middlewares/auth';

import HorarioController from '../app/controllers/HorarioController';

class HorarioRouter {
  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  setRoutes() {
    this.router.route('/horarios').get(authMiddleware, HorarioController.index);

    this.router
      .route('/horarios')
      .post(authMiddleware, HorarioController.store);
  }
}

export default new HorarioRouter().router;