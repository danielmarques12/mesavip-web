/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Banner, Main } from './styles';
import imagem_restaurante from '../../placeholders/placeholder-1366x300.png';

import RestauranteInfo from '../../components/Restaurante/RestauranteInfo';
import Agendamento from '../../components/Restaurante/Agendamento';

export default function Restaurante({ match }) {
  const restauranteId = match.params.id;

  return (
    <Container>
      <Banner>
        <img src={imagem_restaurante} alt="Imagem do restaurante" />
      </Banner>

      <Main>
        <div className="grid">
          <RestauranteInfo id={restauranteId} />
          <Agendamento id={restauranteId} />
        </div>
      </Main>
    </Container>
  );
}
