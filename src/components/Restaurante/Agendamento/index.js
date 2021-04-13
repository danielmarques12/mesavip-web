/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Horarios, Select } from './styles';
import { api } from '../../../services/api';

export default function Agendamento(props) {
  const [horarios, setHorarios] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState(0);

  async function getHorarios(id) {
    return api.get(`mesas/${props.id}`);
  }

  function handleSubmit() {
    return api
      .post(`/agendamentos/${props.id}`, {
        horario_id: horarioSelecionado,
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
          <strong>Horários disponíveis</strong>
          <Select
            onChange={(event) => {
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
      </div>

      <button type="submit" onClick={handleSubmit}>
        Reservar
      </button>
    </Container>
  );
}
