/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { Container, Imagens, Avaliacao, Comentario } from './styles';

import imagemGrande from '../../../placeholder-400x240.png';
import imagemPequena from '../../../placeholder-200x120.png';
import StarIcon from '../../Icons/StarIcon';

export default function Avaliacoes(props) {
  function getAvaliacoes(id) {
    return api.get(`restaurantes/avaliacoes/${id}`);
  }

  const [avaliacoes, setAvaliacoes] = useState([]);
  const { media } = props;
  const { quantidade } = props;

  useEffect(() => {
    getAvaliacoes(props.id).then((item) => {
      setAvaliacoes(item.data);
    });
  }, []);

  return (
    <Container>
      <span>Avaliação dos clientes</span>
      <div className="media">
        <h1>{media}</h1>
        <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <span> {quantidade} avaliações</span>
      </div>
      <Imagens>
        <div>
          <img src={imagemGrande} alt="res" />
        </div>
        <div>
          <img src={imagemPequena} alt="res" />
        </div>
        <div>
          <img src={imagemPequena} alt="res" />
        </div>
        <div>
          <img src={imagemPequena} alt="res" />
        </div>
        <div>
          <img src={imagemPequena} alt="res" />
        </div>
      </Imagens>
      <div className="avaliacoes">
        <span>{quantidade} comentários de clientes</span>
        {avaliacoes.map((avaliacao) => (
          <Avaliacao key={avaliacao.id}>
            <div className="nome-data">
              <span>{avaliacao.cliente}</span>
              <span>23 março de 2032</span>
            </div>
            <div className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <Comentario>
              <p>{avaliacao.comentario}</p>
            </Comentario>
            <hr />
          </Avaliacao>
        ))}
      </div>
    </Container>
  );
}
