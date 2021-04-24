/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaRegCommentAlt, FaStar, FaStarHalf } from 'react-icons/fa';
import { api } from '../../../services/api';
import {
  Container,
  Media,
  QuantidadeDeComentarios,
  Avaliacao,
  Comentario,
  Separador,
} from './styles';
import Stars from './Stars';

export default function Avaliacoes(props) {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const { media, quantidade, restaurante_id } = props;

  useEffect(() => {
    api.get(`restaurantes/avaliacoes/${restaurante_id}`).then((item) => {
      setAvaliacoes(item.data);
    });
  }, []);

  return (
    <Container>
      <Media>
        <span>AVALIAÇÕES DOS CLIENTES</span>
        <h3>{media}</h3>
        <Stars numberOfStars={media} starSize={25} />
        <p> {quantidade} avaliações</p>
      </Media>

      <div className="avaliacoes">
        <QuantidadeDeComentarios>
          <FaRegCommentAlt size={16} />
          <span> {quantidade} comentários de clientes </span>
        </QuantidadeDeComentarios>

        {avaliacoes.map((avaliacao) => (
          <Avaliacao key={avaliacao.id}>
            <Separador />

            <div className="nome-data">
              <span>{avaliacao.cliente}</span>
              <span>23 março de 2032</span>
            </div>

            <Stars numberOfStars={avaliacao.nota} starSize={16} />

            <Comentario>
              <p>{avaliacao.comentario}</p>
            </Comentario>
          </Avaliacao>
        ))}
      </div>
    </Container>
  );
}
