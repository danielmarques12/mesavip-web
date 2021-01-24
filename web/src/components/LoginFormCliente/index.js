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

function POST_cliente(cliente) {
  return api.post('usuarios', cliente).then(() => {
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
                <p className="h4 text-center py-4">Quero criar uma conta</p>
                <div className="grey-text">
                  <MDBInput
                    value={cliente.nome}
                    onChange={(event) =>
                      setCliente({ ...cliente, nome: event.target.value })
                    }
                    label="Nome"
                    group
                    type="text"
                    validate
                  />
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
                    value={cliente.cpf}
                    onChange={(event) =>
                      setCliente({ ...cliente, cpf: event.target.value })
                    }
                    label="CPF"
                    group
                    type="text"
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
                    Continuar
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
