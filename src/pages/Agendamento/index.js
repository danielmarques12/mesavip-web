/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { Container, Select } from './styles';

function getRestaurante(id) {
  return api.get(`restaurantes/${id}/horarios`);
}

export default function Agendamento({ match }) {
  const [restaurante, setRestaurante] = useState({});

  const [horarios, setHorarios] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState(0);

  const [mesas, setMesas] = useState([]);
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
        setHorarios(item.data.horarios);
        setRestaurante(item.data.restaurante);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Container>
      <h1>{restaurante.nome}</h1>
      <strong>Horários</strong>
      <Select
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
      </Select>
      <strong>Mesas</strong>
      <Select onChange={(event) => setMesaSelecionada(event.target.value)}>
        {mesas.map((mesa) => (
          <option key={mesa.id} value={mesa.id}>
            {mesa.capacidade}
          </option>
        ))}
      </Select>
      <button type="submit" onClick={realizaAgendamento}>
        Realizar agendamento
      </button>
    </Container>
  );
}
