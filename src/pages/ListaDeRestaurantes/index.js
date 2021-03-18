/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

import {
  Container,
  RestauranteList,
  RestauranteCard,
  Produto,
  DescricaoProduto,
} from './styles';
import imagem_restaurante from '../../placeholder-200x120.png';
import StarIcon from '../../components/Icons/StarIcon';

function getRestaurantes() {
  return api.get('restaurantes').then((response) => response.data);
}

export default function ListaDeRestaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);

  function redireciona_para_restaurante(restaurante_id) {
    window.location.href = `../restaurantes/${restaurante_id}`;
  }

  useEffect(() => {
    let mounted = true;
    getRestaurantes().then((items) => {
      if (mounted) {
        setRestaurantes(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Container>
      <h3>{restaurantes.length} Restaurantes disponíveis</h3>
      <RestauranteList>
        {console.log(restaurantes)}
        {restaurantes.map((restaurante) => (
          <RestauranteCard
            onClick={() => redireciona_para_restaurante(restaurante.id)}
          >
            <Produto>
              <img src={imagem_restaurante} alt={restaurante.nome} />

              <div className="div-produto-titulo-e-nota">
                <strong>{restaurante.nome}</strong>
                <div className="div-nota">
                  <StarIcon />
                  <span>5.0</span>
                </div>
              </div>
              <DescricaoProduto>
                <div className="div-produto-culinaria-e-localizacao">
                  <p>Culinária</p>
                  <p>Localização</p>
                </div>
                <div>R$ 25 - R$50</div>
              </DescricaoProduto>
            </Produto>
          </RestauranteCard>
        ))}
      </RestauranteList>
    </Container>
  );
}
