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
        {restaurantes.map((restaurante) => (
          <RestauranteCard
            onClick={() => redireciona_para_restaurante(restaurante.id)}
          >
            <Produto>
              <img src={imagem_restaurante} alt={restaurante.nome} />

              <div className="div-produto-titulo-e-nota">
                <strong>{restaurante.nome}</strong>
                <div className="div-nota">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 53.867 53.867"
                    width="16"
                  >
                    <path
                      fill="#ffbb00"
                      d="M26.934 1.318l8.322 16.864 18.611 2.705L40.4 34.013l3.179 18.536-16.645-8.751-16.646 8.751 3.179-18.536L0 20.887l18.611-2.705z"
                    />
                  </svg>
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
