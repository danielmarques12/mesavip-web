import React from 'react';
import { Container } from './styles';

import imagemGrande from '../../../placeholders/placeholder-400x240.png';
import imagemPequena from '../../../placeholders/placeholder-200x120.png';

export default function Imagens() {
  const imagensPequenas = [1, 2, 3, 4];

  return (
    <Container>
      <div className="imagem-grande">
        <img src={imagemGrande} alt="res" />
      </div>
      <div className="imagens-pequenas">
        {imagensPequenas.map((id) => (
          <div key={id}>
            <img src={imagemPequena} alt="res" />
          </div>
        ))}
      </div>
    </Container>
  );
}
