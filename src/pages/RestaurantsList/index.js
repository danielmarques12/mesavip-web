/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { api } from '../../services/api';
import {
  Container,
  RestaurantList,
  RestaurantCard,
  Product,
  ProductDescription,
} from './styles';

export default function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);

  function redirectToRestaurant(restaurant_id) {
    window.location.href = `../restaurants/${restaurant_id}`;
  }

  useEffect(
    () =>
      api.get('restaurants/list').then((response) => {
        setRestaurants(response.data);
      }),
    []
  );

  return (
    <Container>
      <h3>{restaurants.length} Available restaurants</h3>
      <RestaurantList>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => redirectToRestaurant(restaurant.id)}
            key={restaurant.id}
          >
            <Product>
              <img src={restaurant.path} alt={restaurant.name} />

              <div className="div-produto-titulo-e-nota">
                <strong>{restaurant.name}</strong>
                <div className="div-nota">
                  <FaStar color="#fb0" />
                  <span>{restaurant.average}</span>
                </div>
              </div>
              <ProductDescription>
                <div className="div-produto-culinaria-e-localizacao">
                  <p>{restaurant.culinary}</p>
                  <p>{restaurant.bairro}</p>
                </div>
                <div>$25 - $50</div>
              </ProductDescription>
            </Product>
          </RestaurantCard>
        ))}
      </RestaurantList>
    </Container>
  );
}
