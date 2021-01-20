// import { Op } from 'sequelize';
import {} from 'date-fns';
import * as yup from 'yup';
import Agendamento from '../models/Agendamento';

class AgendamentoController {
  async store(request, response) {
    const schema = yup.object().shape({
      horario: yup.string().required(),
      quantidade_pessoas: yup.number().required(),
      restaurante_id: yup.number().required(),
      cliente_id: yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validação falhou' });
    }

    const horario_ja_reservado = await Agendamento.findOne({
      where: {
        horario: request.body.horario,
      },
    });

    if (horario_ja_reservado) {
      return response.status(401).json({ error: 'Horário já reservado' });
    }

    const {
      horario,
      quantidade_pessoas,
      restaurante_id,
      cliente_id,
    } = await Agendamento.create(request.body);

    return response.json({
      horario,
      quantidade_pessoas,
      restaurante_id,
      cliente_id,
    });
  }
}

export default new AgendamentoController();