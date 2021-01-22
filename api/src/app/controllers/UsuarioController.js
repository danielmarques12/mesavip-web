import * as yup from 'yup';
import { Op } from 'sequelize';
import Usuario from '../models/Usuario';

class UsuarioController {
  async store(request, response) {
    const schema = yup.object().shape({
      nome: yup.string().required(),
      email: yup.string().email().required(),
      cpf: yup.string(),
      cnpj: yup.string(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validação falhou' });
    }

    const { email, cpf, cnpj } = request.body;

    const usuario_existe = await Usuario.findOne({
      where: {
        [Op.or]: [
          { email, cpf },
          { email, cnpj },
        ],
      },
    });

    if (usuario_existe) {
      return response.status(400).json({ error: 'Usuario já cadastrado' });
    }

    const { nome } = await Usuario.create(request.body);

    return response.json({ nome, email });
  }
}

export default new UsuarioController();
