import * as yup from 'yup';
import Mesa from '../models/Mesa';
import Usuario from '../models/Usuario';

class MesaController {
  async store(request, response) {
    const restaurante = await Usuario.findOne({
      where: {
        id: request.userId,
        cpf: null,
      },
    });

    if (!restaurante) {
      return response.status(401).json({ error: '403 Forbidden' });
    }

    const schema = yup.object().shape({
      capacidade: yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(401).json({ error: 'Validação falhou' });
    }

    const restaurante_id = request.userId;
    const { capacidade } = request.body;

    await Mesa.create({ capacidade, restaurante_id });

    return response.json({ capacidade });
  }
}

export default new MesaController();
