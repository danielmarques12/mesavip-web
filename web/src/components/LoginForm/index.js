/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from 'mdbreact';
import { api } from '../../services/api';

const clientes = {};

function POST_cliente() {
  return api.post('clientes', clientes);
}

export default function LoginForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    clientes.nome = nome;
    clientes.email = email;
    clientes.cpf = cpf;
    clientes.password = password;
    POST_cliente();
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    label="Nome"
                    group
                    type="text"
                    validate
                  />
                  <MDBInput
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    label="Email"
                    group
                    type="email"
                    validate
                  />
                  <MDBInput
                    value={cpf}
                    onChange={(event) => setCPF(event.target.value)}
                    label="CPF"
                    group
                    type="text"
                    validate
                  />
                  <MDBInput
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    label="Senha"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
