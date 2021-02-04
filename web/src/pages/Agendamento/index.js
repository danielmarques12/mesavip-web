/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

function getRestaurante(id) {
  return api.get(`restaurantes/${id}/horarios`);
}

export default function Agendamento({ match }) {
  const [horarios, setHorarios] = useState([]);
  const [mesas, setMesas] = useState([]);

  function getMesas(horario_id) {
    return api.post(`mesas`, { horario_id }).then((response) => {
      setMesas(response.data);
    });
  }

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

      <select id="horarios" onChange={(event) => getMesas(event.target.value)}>
        {horarios.map((horario) => (
          <option key={horario.id} value={horario.id}>
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
