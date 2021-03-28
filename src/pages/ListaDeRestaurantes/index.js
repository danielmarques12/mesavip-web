/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { api } from '../../services/api';
import {
  Container,
  RestauranteList,
  RestauranteCard,
  Produto,
  DescricaoProduto,
} from './styles';

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
              <img
                src={`http://localhost:3333/files/${restaurante.path}`}
                alt={restaurante.nome}
              />

              <div className="div-produto-titulo-e-nota">
                <strong>{restaurante.nome}</strong>
                <div className="div-nota">
                  <FaStar color="#fb0" />
                  <span>5.0</span>
                </div>
              </div>
              <DescricaoProduto>
                <div className="div-produto-culinaria-e-localizacao">
                  <p>{restaurante.culinaria}</p>
                  <p>{restaurante.bairro}</p>
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
