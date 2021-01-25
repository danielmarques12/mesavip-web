/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

function getRestaurante(id) {
  return api.get(`restaurantes/${id}/horarios`);
}

function getMesas(horario) {
  return api.get(`mesas`, { horario });
}

export default function Agendamento({ match }) {
  const [horarios, setHorarios] = useState([]);
  const [mesas, setMesas] = useState([]);

  function handleSelectChange() {}

  useEffect(() => {
    let mounted = true;
    getRestaurante(match.params.id).then((item) => {
      if (mounted) {
        setHorarios(item.data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      {/* Select com quantidade de pessoas */}
      {/* Transformar isso num Componente?????? */}

      <select id="horarios" onChange={handleSelectChange()}>
        {horarios.map((horario) => (
          <option key={horario.id} value={horario}>
            {horario.horario}
          </option>
        ))}
      </select>

      <select id="mesas">
        {mesas.map((mesa) => (
          <option key={mesa.id} value={mesa.id}>
            {mesa.capacidade}
          </option>
        ))}
      </select>
    </div>
  );
}
