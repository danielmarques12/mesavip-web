import * as yup from 'yup';
import { Op } from 'sequelize';
import Restaurante from '../models/Restaurante';

class RestauranteController {
  async store(request, response) {
    const schema = yup.object().shape({
      nome: yup.string().required(),
      email: yup.string().email().required(),
      cnpj: yup.string().required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validação falhou' });
    }

    const restauranteExiste = await Restaurante.findOne({
      where: {
        [Op.or]: [
          {
            email: request.body.email,
          },
          {
            cnpj: request.body.cnpj,
          },
        ],
      },
    });

    if (restauranteExiste) {
      return response.status(401).json({ error: 'Restaurante já existe' });
    }

    const { nome, email, cnpj, password } = await Restaurante.create(
      request.body
    );

    return response.json({ nome, email, cnpj, password });
  }

  async index(request, response) {
    const restaurantes = await Restaurante.findAll();

    return response.json(restaurantes);
  }
}

export default new RestauranteController();
