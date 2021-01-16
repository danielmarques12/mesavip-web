import * as yup from 'yup';
import { Op } from 'sequelize';
import Cliente from '../models/Cliente';

class ClienteController {
  async store(request, response) {
    const schema = yup.object().shape({
      nome: yup.string().required(),
      email: yup.string().email().required(),
      cpf: yup.string().required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validação falhou' });
    }

    const clienteExiste = await Cliente.findOne({
      where: {
        [Op.or]: [{ email: request.body.email }, { cpf: request.body.cpf }],
      },
    });

    if (clienteExiste) {
      return response.status(400).json({ error: 'Cliente já existe' });
    }

    const { nome, email, cpf, password } = await Cliente.create(request.body);

    return response.json({ nome, email, cpf, password });
  }
}

export default new ClienteController();
