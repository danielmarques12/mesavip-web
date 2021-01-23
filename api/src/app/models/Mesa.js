import Sequelize, { Model } from 'sequelize';

class Mesa extends Model {
  static init(sequelize) {
    super.init(
      {
        capacidade: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'mesas',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: 'restaurante_id',
      as: 'restaurante',
    });
  }
}

export default Mesa;
