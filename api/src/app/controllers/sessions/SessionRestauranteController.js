import jwt from 'jsonwebtoken';
import authConfig from '../../../config/auth';
import Restaurante from '../../models/Restaurante';

class SessionRestauranteController {
  async store(request, response) {
    const { email, password } = request.body;

    const restaurante = await Restaurante.findOne({ where: { email } });

    if (!restaurante) {
      return response.status(401).json({ error: 'Restaurante não encontrado' });
    }

    if (!(await restaurante.checkPassword(password))) {
      return response.status(401).json({ error: 'Senhas não são iguais' });
    }

    const { id, name } = restaurante;

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

export default new SessionRestauranteController();
