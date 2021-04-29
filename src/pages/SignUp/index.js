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
  Text,
  Separator,
  CreateAccountLink,
} from './styles';

export default function SignUp(props) {
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    return api.post('users', user).then(() => {
      window.location.href = '/login';
    });
  };

  return (
    <Container>
      <Text>
        <h2>MESAVIP</h2>
        <h3>
          Mesavip helps you making reservations in your favorite restaurants.
        </h3>
      </Text>

      <Form onSubmit={handleSubmit}>
        <Input
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
          placeholder="Name"
          type="text"
        />
        <Input
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          placeholder="Email"
          type="email"
        />

        <Input
          value={user.cpf}
          onChange={(event) => setUser({ ...user, cpf: event.target.value })}
          placeholder="CPF"
          type="text"
        />

        <Input
          value={user.cnpj}
          onChange={(event) => setUser({ ...user, cnpj: event.target.value })}
          placeholder="CNPJ"
          type="text"
        />

        <Input
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          placeholder="Senha"
          type="password"
        />

        <SubmitInput type="submit" value="Cadastrar" />

        <Separator />

        <CreateAccountLink>
          <a href="/login"> Already have an account? </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
