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
  const [horarioSelecionado, setHorarioSelecionado] = useState(0);
  const [mesaSelecionada, setMesaSelecionada] = useState(0);

  function realizaAgendamento() {
    return api
      .post(`/agendamentos/${match.params.id}`, {
        horario_id: horarioSelecionado,
        mesa_id: mesaSelecionada,
      })
      .then(document.location.reload(true));
  }

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
      <strong>Horários</strong>
      <select
        onChange={(event) => {
          getMesas(event.target.value);
          setHorarioSelecionado(event.target.value);
        }}
      >
        {horarios.map((horario) => (
          <option key={horario.id} value={horario.id}>
            {horario.horario}
          </option>
        ))}
      </select>

      <strong>Mesas</strong>
      <select onChange={(event) => setMesaSelecionada(event.target.value)}>
        {mesas.map((mesa) => (
          <option key={mesa.id} value={mesa.id}>
            {mesa.capacidade}
          </option>
        ))}
      </select>
      <button type="submit" onClick={realizaAgendamento}>
        Realizar agendamento
      </button>
    </div>
  );
}
