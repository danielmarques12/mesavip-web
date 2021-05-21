/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo } from 'react';
import DayPicker from 'react-day-picker';
import { Container, Hours, Select, AvailableHours, Button } from './styles';
import { api } from '../../../services/api';
import 'react-day-picker/lib/style.css';

export default function Agendamento(props) {
  const [hours, setHours] = useState([]);
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { restaurant_id } = props;
  const today = new Date();

  const lastAllowedMonth = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 2);
    return date;
  };

  const getAvailableHours = (date) =>
    api
      .get(
        `restaurants/tables/available/${restaurant_id}/${date.toISOString()}`
      )
      .then((item) => {
        setHours(item.data);
      });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    getAvailableHours(date);
  };

  const handleSubmit = async () => {
    await api.post(
      `/reservations/create/${restaurant_id}/${selectedHour}/${selectedDate.toISOString()}`
    );
    getAvailableHours(selectedDate);
  };

  const modifiers = {
    highlighted: selectedDate,
  };

  const modifiersStyles = {
    highlighted: {
      backgroundColor: '#db1313',
    },
  };

  return (
    <Container>
      <DayPicker
        fromMonth={new Date()}
        toMonth={lastAllowedMonth()}
        selectedDays={selectedDate}
        onDayClick={handleDateChange}
        disabledDays={{ before: today }}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
      />

      <AvailableHours>
        <Hours>
          <strong>Available hours</strong>
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
      </AvailableHours>

      <Button type="submit" onClick={handleSubmit}>
        RESERVATE
      </Button>
    </Container>
  );
}
