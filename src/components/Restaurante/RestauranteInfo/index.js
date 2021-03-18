/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { Container, Info, Nota } from './styles';
import Avaliacoes from '../Avaliacoes';
import StarIcon from '../../Icons/StarIcon';

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
        <h1>{restaurante.nome}</h1>
        <p>
          {restaurante.bairro} - {restaurante.cidade} - {restaurante.estado}
        </p>
        <p>{restaurante.culinaria}</p>
      </Info>

      <Nota>
        <div className="nota">
          <StarIcon />
          <span>{avaliacao.media}</span>
          <p>{avaliacao.quantidade} avaliações</p>
        </div>
      </Nota>

      <Avaliacoes
        media={avaliacao.media}
        quantidade={avaliacao.quantidade}
        id={props.id}
      />
    </Container>
  );
}
