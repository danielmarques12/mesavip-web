/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

function getRestaurantes() {
  return api.get('restaurantes').then((response) => response.data);
}

export default function ListaDeRestaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);

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
    <div>
      {restaurantes.map((restaurante) => (
        <a key={restaurante.id} href={`../restaurantes/${restaurante.id}`}>
          {restaurante.nome}
        </a>
      ))}
    </div>
  );
}
