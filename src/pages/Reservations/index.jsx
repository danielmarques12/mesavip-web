import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Container } from './styles';
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
      .delete(`reservations/cancel/${reservation_id}`)
      .then(document.location.reload());
  }

  return (
    <Container>
      <h1>My reservations</h1>

      <table cellSpacing={0}>
        <tr>
          <th>Restaurant</th>
          <th>Address</th>
          <th>Date</th>
          <th>Time</th>
          <th>Cancel reservation</th>
        </tr>
        {reservations.map((reservation) => (
          <tr>
            <td>{reservation.restaurant}</td>
            <td>{reservation.address}</td>
            <td>{reservation.date}</td>
            <td>{reservation.hour}</td>
            <td>Cancel reservation</td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
