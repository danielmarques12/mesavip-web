import Sequelize, { Model } from 'sequelize';

class Agendamento extends Model {
  static init(sequelize) {
    super.init(
      {
        quantidade_pessoas: Sequelize.INTEGER,
        cancelamento: Sequelize.BOOLEAN,
        horario_id: Sequelize.INTEGER,
        cliente_id: Sequelize.INTEGER,
        mesa_id: Sequelize.INTEGER,
      },
      { sequelize, tableName: 'agendamentos' }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'cliente_id', as: 'cliente' });
  }
}

export default Agendamento;
