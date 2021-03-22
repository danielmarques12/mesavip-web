/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Horarios, Mesas, Select } from './styles';
import { api } from '../../../services/api';

export default function Agendamento(props) {
  const [horarios, setHorarios] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState(0);

  const [mesas, setMesas] = useState([]);
  const [mesaSelecionada, setMesaSelecionada] = useState(0);

  async function getHorarios(id) {
    return api.get(`restaurantes/horarios/${id}`);
  }

  async function getMesas(horario_id) {
    const response = await api.post(`mesas`, { horario_id });
    setMesas(response.data);
  }

  function realizaAgendamento() {
    return api
      .post(`/agendamentos/${props.id}`, {
        horario_id: horarioSelecionado,
        mesa_id: mesaSelecionada,
      })
      .then(document.location.reload(true));
  }

  useEffect(() => {
    getHorarios(props.id).then((item) => {
      setHorarios(item.data);
    });
  }, []);

  return (
    <Container>
      <div className="horarios-mesas">
        <Horarios>
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
        </Horarios>

        <Mesas>
          <strong>Mesas</strong>
          <Select onChange={(event) => setMesaSelecionada(event.target.value)}>
            {mesas.map((mesa) => (
              <option key={mesa.id} value={mesa.id}>
                {mesa.capacidade} pessoas
              </option>
            ))}
          </Select>
        </Mesas>
      </div>

      <button type="submit" onClick={realizaAgendamento}>
        Realizar agendamento
      </button>
    </Container>
  );
}
