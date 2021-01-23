import {} from 'date-fns';
import * as yup from 'yup';
import Agendamento from '../models/Agendamento';

class AgendamentoController {
  async store(request, response) {
    const schema = yup.object().shape({
      horario_id: yup.string().required(),
      quantidade_pessoas: yup.number().required(),
      mesa_id: yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validação falhou' });
    }

    const agendamento = {
      mesa_id: request.body.mesa_id,
      horario_id: request.body.horario_id,
      quantidade_pessoas: request.body.quantidade_pessoas,
    };

    const agendamento_indisponivel = await Agendamento.findOne({
      where: {
        mesa_id: agendamento.mesa_id,
        horario_id: agendamento.horario_id,
      },
    });

    if (agendamento_indisponivel) {
      return response
        .status(401)
        .json({ error: 'Mesa já agendada para este horário' });
    }

    await Agendamento.create(agendamento);

    return response.json(agendamento);
  }

  async delete(request, response) {
    const agendamento = await Agendamento.destroy(request.params.id);

    return response.json(agendamento);
  }
}

export default new AgendamentoController();
