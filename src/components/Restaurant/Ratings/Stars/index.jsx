/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

export default function Stars({ numberOfStars, starSize }) {
  const remainder = numberOfStars % 1;
  const averageInteger = Math.floor(numberOfStars - remainder);
  const stars = [];

  function isHalfStarNeeded() {
    return remainder >= 0.5;
  }

  for (let i = 1; i <= averageInteger; i++) {
    stars.push(<FaStar size={starSize} color="#fb0" key={i} />);
  }

  return (
    <>
      {stars}
      {isHalfStarNeeded() ? <FaStarHalf size={starSize} color="fb0" /> : null}
    </>
  );
}
