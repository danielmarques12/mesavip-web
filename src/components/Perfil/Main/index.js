import React from 'react';
import { Container } from './styles';
import Arquivos from '../Arquivos';

export default function Main() {
  return (
    <Container>
      <Arquivos imageType="banner" multiple={false} />
      <Arquivos imageType="galeria" multiple />
    </Container>
  );
}
