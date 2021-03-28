/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../../services/api';

export default function Imagens(props) {
  const [imagens, setImagens] = useState([]);
  const [imagemGrande, setImagemGrande] = useState('');
  const url = 'http://localhost:3333/files';

  useEffect(() => {
    api.get(`restaurantes/imagens/${props.id}`).then((item) => {
      setImagemGrande(item.data.shift());
      setImagens(item.data);
    });
  }, []);

  return (
    <Container>
      <div className="imagem-grande">
        <img
          src={`${url}/${imagemGrande.path}`}
          alt="galeria de imagens do restaurante"
        />
      </div>
      <div className="imagens-pequenas">
        {imagens.map((imagem) => (
          <div key={imagem.id}>
            <img
              src={`${url}/${imagem.path}`}
              alt="galeria de imagens do restaurante"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
