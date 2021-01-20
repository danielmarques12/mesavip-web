import jwt from 'jsonwebtoken';
import authConfig from '../../../config/auth';
import Cliente from '../../models/Cliente';

class SessionClienteController {
  async store(request, response) {
    const { email, password } = request.body;

    const cliente = await Cliente.findOne({ where: { email } });

    if (!cliente) {
      return response.status(401).json({ error: 'Cliente não encontrado' });
    }

    if (!(await cliente.checkPassword(password))) {
      return response.status(401).json({ error: 'Senhas não são iguais' });
    }

    const { id, name } = cliente;

    return response.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionClienteController();
