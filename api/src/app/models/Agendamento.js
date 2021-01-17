import Sequelize, { Model } from 'sequelize';

class Agendamento extends Model {
  static init(sequelize) {
    super.init(
      {
        horario: Sequelize.DATE,
        quantidade_pessoas: Sequelize.INTEGER,
        cancelamento: Sequelize.DATE,
        restaurante_id: Sequelize.INTEGER,
        cliente_id: Sequelize.INTEGER,
      },
      { sequelize, tableName: 'agendamentos' }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
    this.belongsTo(models.Restaurante, {
      foreignKey: 'restaurante_id',
      as: 'restaurante',
    });
  }
}

export default Agendamento;
