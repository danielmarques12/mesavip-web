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
  Text,
  Separator,
  CreateAccountLink,
} from './styles';

function POST_SESSIONS(user) {}

export default function Login(props) {
  const [user, setUser] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('users/login', user);
    login(response.data.token);
    setUserType(response.data.user.type);

    window.location.href = '../';
  }

  return (
    <Container>
      <Text>
        <h2>MESAVIP</h2>
        <h3>
          Mesavip helps you making reservations in your favorite restaurants.
        </h3>
      </Text>

      <Form onSubmit={handleSubmit} autoComplete="on">
        <Input
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          name="email"
          placeholder="Email"
          type="email"
        />

        <Input
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          placeholder="Password"
          type="password"
        />

        <SubmitInput type="submit" value="Login" />

        <a href="/#">Forgot your password?</a>

        <Separator />

        <CreateAccountLink>
          <a href="/sign-up"> Create new account </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
