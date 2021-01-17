import Sequelize, { Model } from 'sequelize';

class Horario extends Model {
  static init(sequelize) {
    super.init(
      {
        horario: Sequelize.STRING,
        restaurante_id: Sequelize.INTEGER,
      },
      { sequelize, tableName: 'horarios' }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Restaurante, {
      foreignKey: 'restaurante_id',
      as: 'restaurante',
    });
  }
}

export default Horario;
