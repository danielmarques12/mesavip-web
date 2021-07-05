import React, { useState, useEffect } from 'react';
import { Container, ReservationsWrapper } from './styles';
import { api } from '../../services/api';
import ReservationCard from '../../components/Reservations/ReservationCard';

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

  return (
    <Container>
      <h1>Following reservations</h1>

      <ReservationsWrapper>
        {followingReservations.map((reservation) => (
          <ReservationCard reservation={reservation} />
        ))}
      </ReservationsWrapper>

      <h1>Past reservations</h1>

      <ReservationsWrapper>
        {pastReservations.map((reservation) => (
          <ReservationCard reservation={reservation} past />
        ))}
      </ReservationsWrapper>
    </Container>
  );
}
