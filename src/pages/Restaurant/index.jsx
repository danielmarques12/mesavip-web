/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Main } from './styles';

import RestaurantInfo from '../../components/Restaurant/RestaurantInfo';
import Reservation from '../../components/Restaurant/Reservation';
import Banner from '../../components/Restaurant/Banner';

export default function Restaurant({ match }) {
  const restaurant_id = match.params.id;

  return (
    <Container>
      <Banner restaurant_id={restaurant_id} />

      <Main>
        <div className="grid">
          <RestaurantInfo restaurant_id={restaurant_id} />
          <Reservation restaurant_id={restaurant_id} />
        </div>
      </Main>
    </Container>
  );
}
