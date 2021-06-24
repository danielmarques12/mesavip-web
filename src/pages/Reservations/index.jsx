import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Container } from './styles';
import { api } from '../../services/api';

export default function Reservations() {
  const [pastReservations, setPastReservations] = useState([]);
  const [followingReservations, setFollowingReservations] = useState([]);

  useEffect(
    () =>
      api.get('reservations/list').then((item) => {
        setPastReservations(item.data.pastReservations);
        setFollowingReservations(item.data.followingReservations);
      }),
    []
  );

  function handleClick(reservation_id) {
    return api
      .delete(`reservations/cancel/${reservation_id}`)
      .then(document.location.reload());
  }

  return (
    <Container>
      <h1>Following reservations</h1>

      <table cellSpacing={0}>
        <tr>
          <th>Restaurant</th>
          <th>Address</th>
          <th>Date</th>
          <th>Time</th>
          <th>Cancel reservation</th>
        </tr>
        {followingReservations.map((following) => (
          <tr>
            <td>{following.restaurant}</td>
            <td>{following.address}</td>
            <td>{following.date}</td>
            <td>{following.time}</td>
            <td>Cancel reservation</td>
          </tr>
        ))}
      </table>

      <h1>Past reservations</h1>

      <table cellSpacing={0}>
        <tr>
          <th>Restaurant</th>
          <th>Date</th>
          <th>Time</th>
          <th>Rate this reservation</th>
        </tr>
        {pastReservations.map((pastReservation) => (
          <tr>
            <td>{pastReservation.restaurant}</td>
            <td>{pastReservation.date}</td>
            <td>{pastReservation.time}</td>
            <td>Rate this reservation</td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
