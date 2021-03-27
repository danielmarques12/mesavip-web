/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Banner, Main } from './styles';
import { banner } from '../../assets/placeholders';

import RestauranteInfo from '../../components/Restaurante/RestauranteInfo';
import Agendamento from '../../components/Restaurante/Agendamento';

export default function Restaurante({ match }) {
  const restauranteId = match.params.id;

  return (
    <Container>
      <Banner>
        <img src={banner} alt="Imagem do restaurante" />
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
