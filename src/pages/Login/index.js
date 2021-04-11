/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { api } from '../../services/api';
import { login, setUserType } from '../../services/auth';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Texto,
  Separator,
  CreateAccountLink,
} from './styles';

function POST_SESSIONS(usuario) {
  return api.post('sessions', usuario).then((response) => {
    login(response.data.token);
    setUserType(response.data.userType);
    window.location.href = '../';
  });
}

export default function Login(props) {
  const [usuario, setUsuario] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    POST_SESSIONS(usuario);
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

      <Form onSubmit={handleSubmit} autoComplete="on">
        <Input
          value={usuario.email}
          onChange={(event) =>
            setUsuario({ ...usuario, email: event.target.value })
          }
          name="email"
          placeholder="Email"
          type="email"
        />

        <Input
          value={usuario.password}
          onChange={(event) =>
            setUsuario({ ...usuario, password: event.target.value })
          }
          placeholder="Senha"
          type="password"
        />

        <SubmitInput type="submit" value="Entrar" />

        <a href="/#">Esqueceu a senha?</a>

        <Separator />

        <CreateAccountLink>
          <a href="/sign-up"> Criar nova conta </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
