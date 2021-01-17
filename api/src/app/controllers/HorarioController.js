import * as yup from 'yup';
import { Op } from 'sequelize';
import Horario from '../models/Horario';

class HorarioController {
  async store(request, response) {
    const schema = yup.object().shape({
      horario: yup.string().required(),
      restaurante_id: yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validação falhou' });
    }

    const horario_ja_cadastrado = await Horario.findOne({
      where: {
        [Op.and]: [
          {
            restaurante_id: request.body.restaurante_id,
          },
          {
            horario: request.body.horario,
          },
        ],
      },
    });

    if (horario_ja_cadastrado) {
      return response.status(400).json({ error: 'Horário já cadastrado' });
    }

    const { horario, restaurante_id } = await Horario.create(request.body);

    return response.json({ horario, restaurante_id });
  }

  async index(request, response) {
    const horarios = await Horario.findAll({
      attributes: ['horario'],
    });

    return response.json(horarios);
  }
}

export default new HorarioController();
