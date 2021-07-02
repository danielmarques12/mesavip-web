/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Container, Main, Separator } from './styles';
import { api } from '../../services/api';

import Info from '../../components/Restaurant/Info';
import Reservation from '../../components/Restaurant/Reservation';
import Banner from '../../components/Restaurant/Banner';
import Ratings from '../../components/Restaurant/Ratings';
import ImagesGallery from '../../components/Restaurant/ImagesGallery';
import About from '../../components/Restaurant/About';

export default function Restaurant({ match }) {
  const restaurant_id = match.params.id;
  const [restaurant, setRestaurant] = useState({});

  useEffect(
    () =>
      api.get(`restaurants/${restaurant_id}`).then((item) => {
        setRestaurant(item.data);
      }),
    []
  );

  return (
    <Container>
      <Banner restaurant_id={restaurant_id} />

      <Main>
        <div className="flex">
          <div className="content">
            <Info restaurant={restaurant} />
            <ImagesGallery restaurant_id={restaurant_id} />
            <About restaurant={restaurant} />
          </div>

          <div className="reservation-bg">
            <Separator className="separator" />
            <Reservation restaurant_id={restaurant_id} />
            <Separator className="separator" />
          </div>
        </div>

        <Ratings
          average={restaurant.avg_rating}
          totalratings={restaurant.total_ratings}
          restaurant_id={restaurant_id}
        />
      </Main>
    </Container>
  );
}
