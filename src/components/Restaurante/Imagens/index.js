import React from 'react';
import { Container } from './styles';
import { imagemPequena, imagemGrande } from '../../../assets/placeholders';

export default function Imagens() {
  const imagensPequenasIteration = [1, 2, 3, 4];

  return (
    <Container>
      <div className="imagem-grande">
        <img src={imagemGrande} alt="res" />
      </div>
      <div className="imagens-pequenas">
        {imagensPequenasIteration.map((id) => (
          <div key={id}>
            <img src={imagemPequena} alt="res" />
          </div>
        ))}
      </div>
    </Container>
  );
}
