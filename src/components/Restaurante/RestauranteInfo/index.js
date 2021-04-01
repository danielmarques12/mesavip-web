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
  function getRestaurante(id) {
    return api.get(`restaurantes/${id}`);
  }

  const [restaurante, setRestaurante] = useState({});
  const [avaliacao, setAvaliacao] = useState({});

  useEffect(() => {
    getRestaurante(props.id).then((item) => {
      setRestaurante(item.data.restaurante[0]);
      setAvaliacao(item.data.avaliacao);
    });
  }, []);

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
            <span> {avaliacao.media} </span>
          </div>
          <p> {avaliacao.quantidade} avaliações</p>
        </Nota>
      </Info>

      <Imagens restaurante_id={props.id} />

      <Sobre
        restaurante={{
          sobre: restaurante.sobre,
          telefone: restaurante.telefone,
          site: restaurante.site,
        }}
      />

      <Avaliacoes
        media={avaliacao.media}
        quantidade={avaliacao.quantidade}
        id={props.id}
      />
    </Container>
  );
}
