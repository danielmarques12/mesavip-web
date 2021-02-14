/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { api } from '../../services/api';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Texto,
  Separator,
  CreateAccountLink,
} from './styles';

function POST_CRIAR_USUARIO(usuario) {
  return api.post('usuarios', usuario).then(() => {
    window.location.href = '/login';
  });
}

export default function SignUp(props) {
  const [usuario, setUsuario] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    POST_CRIAR_USUARIO(usuario);
  };

  return (
    <Container>
      <Texto>
        <h2>MESAVIP</h2>
        <h3>
          O Mesavip ajuda você a fazer agendamentos em seus restaurantes
          preferidos.
        </h3>
      </Texto>

      <Form onSubmit={handleSubmit}>
        <Input
          value={usuario.nome}
          onChange={(event) =>
            setUsuario({ ...usuario, nome: event.target.value })
          }
          placeholder="Nome"
          type="text"
        />
        <Input
          value={usuario.email}
          onChange={(event) =>
            setUsuario({ ...usuario, email: event.target.value })
          }
          placeholder="Email"
          type="email"
        />

        <Input
          value={usuario.cpf}
          onChange={(event) =>
            setUsuario({ ...usuario, cpf: event.target.value })
          }
          placeholder="CPF"
          type="text"
        />

        <Input
          value={usuario.cnpj}
          onChange={(event) =>
            setUsuario({ ...usuario, cnpj: event.target.value })
          }
          placeholder="CNPJ"
          type="text"
        />

        <Input
          value={usuario.password}
          onChange={(event) =>
            setUsuario({ ...usuario, password: event.target.value })
          }
          placeholder="Senha"
          type="password"
        />

        <SubmitInput type="submit" value="Cadastrar" />

        <Separator />

        <CreateAccountLink>
          <a href="/login"> Já sou cadastrado </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
