import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Container, SchedulingList, DeleteSchedule } from './styles';
import { api } from '../../services/api';

export default function MyScheduling() {
  const [scheduling, setScheduling] = useState([]);

  useEffect(
    () => api.get('agendamentos').then((item) => setScheduling(item.data)),
    []
  );

  function handleClick(scheduleId) {
    return api
      .delete(`agendamentos/${scheduleId}`)
      .then(document.location.reload());
  }

  return (
    <Container>
      <h3>Meus agendamentos</h3>
      <SchedulingList>
        <ul>
          {scheduling.map((schedule) => (
            <li key={schedule.id}>
              <span>{schedule.restaurante}</span>
              <span>{schedule.horario}</span>
              <DeleteSchedule onClick={() => handleClick(schedule.id)}>
                <span>cancelar</span>
                <FaRegTrashAlt />
              </DeleteSchedule>
            </li>
          ))}
        </ul>
      </SchedulingList>
    </Container>
  );
}
