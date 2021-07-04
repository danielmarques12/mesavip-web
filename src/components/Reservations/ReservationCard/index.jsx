/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import {
  Container,
  MainWrapper,
  Date,
  InfoWrapper,
  NameAndLocation,
  TimeAndAvgRate,
  Nota,
  Address,
  Separator,
  ButtonsWrapper,
  Button,
} from './styles';
import { api } from '../../../services/api';

export default function ReservationCard({ reservation }) {
  const handleClick = (reservation_id) =>
    api
      .delete(`reservations/cancel/${reservation_id}`)
      .then(document.location.reload());

  return (
    <>
      <Container key={reservation.id}>
        <MainWrapper>
          <Date>
            <h2>23</h2>
            <span>November</span>
          </Date>

          <InfoWrapper>
            <NameAndLocation>
              <span>Burgen Queen - São Paulo</span>
            </NameAndLocation>

            <TimeAndAvgRate>
              <span>20:30 PM</span>
              <Nota>
                <FaStar />
                <span>4.2</span>
              </Nota>
            </TimeAndAvgRate>

            <Address>
              <span>Rua Benedita Galdino Coelho - 84</span>
            </Address>
          </InfoWrapper>
        </MainWrapper>

        <Separator />

        <ButtonsWrapper>
          <Button onClick={() => handleClick(reservation.id)}>Cancel</Button>
          <Button>Rate</Button>
        </ButtonsWrapper>
      </Container>
    </>
  );
}
