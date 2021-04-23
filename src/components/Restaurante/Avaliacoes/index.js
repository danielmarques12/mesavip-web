/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaRegCommentAlt, FaStar, FaStarHalf } from 'react-icons/fa';
import { api } from '../../../services/api';
import {
  Container,
  Media,
  ContadorDeComentarios,
  Avaliacao,
  Comentario,
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

        <Stars media={media} />

        <p> {quantidade} avaliações</p>
      </Media>

      <div className="avaliacoes">
        <ContadorDeComentarios>
          <FaRegCommentAlt size={16} />
          <span> {quantidade} comentários de clientes </span>
        </ContadorDeComentarios>

        {avaliacoes.map((avaliacao) => (
          <Avaliacao key={avaliacao.id}>
            <div className="separador" />

            <div className="nome-data">
              <span>{avaliacao.cliente}</span>
              <span>23 março de 2032</span>
            </div>

            {/* <div className="stars">
              {estrelas.map((id) => (
                <FaStar color="fb0" key={id} />
              ))}
            </div> */}

            <Comentario>
              <p>{avaliacao.comentario}</p>
            </Comentario>
          </Avaliacao>
        ))}
      </div>
    </Container>
  );
}
