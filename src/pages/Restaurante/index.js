/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Container, Banner, Main, Agendamento, Select } from './styles';
import imagem_restaurante from '../../placeholder-1366x300.png';

import RestauranteInfo from '../../components/Restaurante/RestauranteInfo';

function getHorarios(id) {
  return api.get(`restaurantes/horarios/${id}`);
}

export default function Restaurante({ match }) {
  const [restauranteId, setRestauranteId] = useState(match.params.id);

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
    getHorarios(match.params.id).then((item) => {
      setHorarios(item.data);
    });
  }, []);

  return (
    <Container>
      <Banner>
        <img src={imagem_restaurante} alt="Imagem do restaurante" />
      </Banner>

      <Main>
        <RestauranteInfo id={restauranteId} />

        <Agendamento>
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
        </Agendamento>
      </Main>
    </Container>
  );
}
