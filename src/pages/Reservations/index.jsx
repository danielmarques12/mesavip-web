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
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Address</th>
            <th>Date</th>
            <th>Time</th>
            <th>Cancel reservation</th>
          </tr>
        </thead>
        <tbody>
          {followingReservations.map((following) => (
            <tr>
              <td data-label="Restaurant">{following.restaurant}</td>
              <td data-label="Address">{following.address}</td>
              <td data-label="Date">{following.date}</td>
              <td data-label="Time">{following.time}</td>
              <td data-label="Cancel reservation">Cancel reservation</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Past reservations</h1>

      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Date</th>
            <th>Time</th>
            <th>Rate this reservation</th>
          </tr>
        </thead>
        <tbody>
          {pastReservations.map((pastReservation) => (
            <tr>
              <td data-label="Restaurant">{pastReservation.restaurant}</td>
              <td data-label="Date">{pastReservation.date}</td>
              <td data-label="Time">{pastReservation.time}</td>
              <td data-label="Rate this reservation">Rate this reservation</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
