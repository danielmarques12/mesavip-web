import Sequelize from 'sequelize';

import Cliente from '../app/models/Cliente';
import Restaurante from '../app/models/Restaurante';
import Agendamento from '../app/models/Agendamento';
import Horario from '../app/models/Horario';

import databaseConfig from '../config/database';

const models = [Cliente, Restaurante, Agendamento, Horario];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
