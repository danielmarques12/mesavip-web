/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { api } from '../../../services/api';
import { Container, Info, Details, Rate } from './styles';

import Ratings from '../Ratings';
import Images from '../Images';
import About from '../About';

export default function RestaurantInfo(props) {
  const [restaurant, setRestaurant] = useState({});
  const { restaurant_id } = props;

  useEffect(
    () =>
      api.get(`restaurants/${restaurant_id}`).then((item) => {
        setRestaurant(item.data);
      }),
    []
  );

  return (
    <Container>
      <Info>
        <Details>
          <h1> {restaurant.name} </h1>
          <p>
            {restaurant.bairro} - {restaurant.cidade} - {restaurant.estado}
          </p>
          <p> {restaurant.culinary} </p>
        </Details>

        <Rate>
          <div className="nota">
            <FaStar color="#fb0" size={17} />
            <span> {restaurant.avg_rating} </span>
          </div>
          <p> {restaurant.total_ratings} Ratings</p>
        </Rate>
      </Info>

      <Images restaurant_id={restaurant_id} />

      <About
        restaurant={{
          about: restaurant.about,
          phone: restaurant.phone,
          site: restaurant.site,
        }}
      />

      <Ratings
        average={restaurant.avg_rating}
        totalratings={restaurant.total_ratings}
        restaurant_id={restaurant_id}
      />
    </Container>
  );
}
