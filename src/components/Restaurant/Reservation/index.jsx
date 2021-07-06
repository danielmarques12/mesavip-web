/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';
import DayPicker from 'react-day-picker';
import { Container, Hours, Select, AvailableHours, Button } from './styles';
import { api } from '../../../services/api';
import 'react-day-picker/lib/style.css';

export default function Agendamento(props) {
  const [hours, setHours] = useState([]);
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { restaurant_id } = props;
  const today = new Date();
  const modalBackgroundColor = JSON.parse(localStorage.getItem('light'));

  const lastAllowedMonth = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 2);
    return date;
  };

  const getAvailableHours = (date) =>
    api
      .get(
        `restaurants/available-hours/${restaurant_id}/${date.toDateString()}`
      )
      .then((item) => {
        setHours(item.data);
        setSelectedHour(item.data[0].hour);
      });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    getAvailableHours(date);
  };

  const handleSubmit = async () => {
    await api.post('/reservations/create', {
      restaurant_id,
      time: selectedHour,
      date: selectedDate.toDateString(),
    });
    setModalIsOpen(true);
  };

  const handleModalClick = () => {
    document.location.reload();
  };

  const modalStyles = {
    content: {
      background: modalBackgroundColor.background.primary,
      color: modalBackgroundColor.colors.primary,
      // overflowY: 'hidden',
      textAlign: 'center',
      top: '390px',
      bottom: '390px',
      left: '710px',
      right: '710px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: '2rem',
      fontSize: '15px',
    },

    overlay: {
      background:
        'linear-gradient(rgba(255, 255, 255, 0.5), rgba(122, 122, 122, 0.5))',
    },
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
    <Container className="reservation">
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
              <option key={hour.id} value={hour.hour}>
                {hour.hour}
              </option>
            ))}
          </Select>
        </Hours>
      </AvailableHours>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={modalStyles}
        preventScroll
      >
        <h2>Reservation registered successfully</h2>
        <Button onClick={handleModalClick}>Confirm</Button>
      </Modal>

      <Button type="submit" onClick={handleSubmit}>
        Reservate
      </Button>
    </Container>
  );
}
