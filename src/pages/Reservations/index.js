import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Container, ReservationsList, DeleteReservation } from './styles';
import { api } from '../../services/api';

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(
    () =>
      api.get('reservations/list').then((item) => setReservations(item.data)),
    []
  );

  function handleClick(reservation_id) {
    return api
      .delete(`reservations/${reservation_id}`)
      .then(document.location.reload());
  }

  // Display reservations as a row list?
  // Display reservations as a row list?
  // Display reservations as a row list?

  return (
    <Container>
      <h3>My reservations</h3>
      <ReservationsList>
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <span>{reservation.restaurant}</span>
              <span>{reservation.hour}</span>

              <DeleteReservation onClick={() => handleClick(reservation.id)}>
                <span>Cancel</span>
                <FaRegTrashAlt />
              </DeleteReservation>
            </li>
          ))}
        </ul>
      </ReservationsList>
    </Container>
  );
}
