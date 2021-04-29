/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Hours, Select } from './styles';
import Dialog from '../Dialog';
import { api } from '../../../services/api';

export default function Agendamento(props) {
  const [hours, setHours] = useState([]);
  const [selectedHour, setSelectedHour] = useState(0);
  const { restaurant_id } = props;

  useEffect(() => {
    api.get(`tables/${restaurant_id}`).then((item) => {
      setHours(item.data);
    });
  }, []);

  return (
    <Container>
      <div className="hours-mesas">
        <Hours>
          <strong>Available reservations (today)</strong>
          <Select
            onChange={(event) => {
              setSelectedHour(event.target.value);
            }}
          >
            {hours.map((hour) => (
              <option key={hour.id} value={hour.id}>
                {hour.hour}
              </option>
            ))}
          </Select>
        </Hours>
      </div>
      <Dialog restaurant_id={restaurant_id} selectedHour={selectedHour} />
    </Container>
  );
}
