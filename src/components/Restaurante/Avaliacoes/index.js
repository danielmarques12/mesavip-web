/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaRegCommentAlt, FaStar } from 'react-icons/fa';
import { api } from '../../../services/api';
import {
  Container,
  Media,
  ContadorDeComentarios,
  Avaliacao,
  Comentario,
} from './styles';

export default function Avaliacoes(props) {
  function getAvaliacoes(id) {
    return api.get(`restaurantes/avaliacoes/${id}`);
  }

  const [avaliacoes, setAvaliacoes] = useState([]);
  const { media, quantidade } = props;
  const estrelas = [1, 2, 3, 4, 5];

  useEffect(() => {
    getAvaliacoes(props.id).then((item) => {
      setAvaliacoes(item.data);
    });
  }, []);

  return (
    <Container>
      <Media>
        <span>AVALIAÇÕES DOS CLIENTES</span>
        <h3>{media}</h3>

        {estrelas.map((id) => (
          <FaStar size={25} color="fb0" key={id} />
        ))}

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
            <div className="stars">
              {estrelas.map((id) => (
                <FaStar color="fb0" key={id} />
              ))}
            </div>
            <Comentario>
              <p>{avaliacao.comentario}</p>
            </Comentario>
          </Avaliacao>
        ))}
      </div>
    </Container>
  );
}
