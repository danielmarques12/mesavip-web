/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../../services/api';

export default function Imagens(props) {
  const [imagens, setImagens] = useState([]);
  const [imagemGrande, setImagemGrande] = useState('');

  const { restaurante_id } = props;

  useEffect(() => {
    api.post('getfiles', { restaurante_id, type: 'galeria' }).then((item) => {
      setImagemGrande(item.data.shift());
      setImagens(item.data);
    });
  }, []);

  return (
    <Container>
      <div className="imagem-grande">
        <img src={imagemGrande.path} alt="galeria de imagens do restaurante" />
      </div>
      <div className="imagens-pequenas">
        {imagens.map((imagem) => (
          <div key={imagem.id}>
            <img src={imagem.path} alt="galeria de imagens do restaurante" />
          </div>
        ))}
      </div>
    </Container>
  );
}
