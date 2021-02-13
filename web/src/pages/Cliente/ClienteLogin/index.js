/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
import { login } from '../../services/auth';

function POST_cliente(cliente) {
  return api.post('sessions', cliente).then((response) => {
    login(response.data.token);
    window.location.href = '../restaurantes';
  });
}

export default function LoginForm(props) {
  const [cliente, setCliente] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    POST_cliente(cliente);
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Fazer Login</p>
                <div className="grey-text">
                  <MDBInput
                    value={cliente.email}
                    onChange={(event) =>
                      setCliente({ ...cliente, email: event.target.value })
                    }
                    label="Email"
                    group
                    type="email"
                    validate
                  />
                  <MDBInput
                    value={cliente.password}
                    onChange={(event) =>
                      setCliente({ ...cliente, password: event.target.value })
                    }
                    label="Senha"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Entrar
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
