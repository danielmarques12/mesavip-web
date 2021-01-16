import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'clientes',
      }
    );

    this.addHook('beforeSave', async (cliente) => {
      if (cliente.password) {
        cliente.password_hash = await bcrypt.hash(cliente.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Cliente;
