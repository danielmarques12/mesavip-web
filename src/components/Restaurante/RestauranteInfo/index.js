/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { api } from '../../../services/api';
import { Container, Info, Detalhes, Nota } from './styles';

import Avaliacoes from '../Avaliacoes';
import Imagens from '../Imagens';
import Sobre from '../Sobre';

export default function RestauranteInfo(props) {
  const [restaurante, setRestaurante] = useState({});
  const { restaurante_id } = props;

  useEffect(
    () =>
      api.get(`restaurante/${restaurante_id}`).then((item) => {
        setRestaurante(item.data);
      }),
    []
  );

  return (
    <Container>
      <Info>
        <Detalhes>
          <h1> {restaurante.nome} </h1>
          <p>
            {restaurante.bairro} - {restaurante.cidade} - {restaurante.estado}
          </p>
          <p> {restaurante.culinaria} </p>
        </Detalhes>

        <Nota>
          <div className="nota">
            <FaStar color="#fb0" size={17} />
            <span> {restaurante.media} </span>
          </div>
          <p> {restaurante.totaldeavaliacoes} avaliações</p>
        </Nota>
      </Info>

      <Imagens restaurante_id={restaurante_id} />

      <Sobre
        restaurante={{
          sobre: restaurante.sobre,
          telefone: restaurante.telefone,
          site: restaurante.site,
        }}
      />

      <Avaliacoes
        media={restaurante.media}
        quantidade={restaurante.totaldeavaliacoes}
        id={restaurante_id}
      />
    </Container>
  );
}
