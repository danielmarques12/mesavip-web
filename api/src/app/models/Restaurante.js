import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Restaurante extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'restaurantes',
      }
    );

    this.addHook('beforeSave', async (restaurante) => {
      if (restaurante.password) {
        restaurante.password_hash = await bcrypt.hash(restaurante.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Restaurante;
