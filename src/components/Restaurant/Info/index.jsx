/* eslint-disable react/prop-types */
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container, Info, Details, Rate } from './styles';

export default function Something(props) {
  const { restaurant } = props;

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
    </Container>
  );
}
