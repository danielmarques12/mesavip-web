/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

export default function Stars({ numberOfStars, starSize }) {
  const resto = numberOfStars % 1;
  const mediaInteger = Math.floor(numberOfStars - resto);
  const stars = [];

  function isHalfStarNeeded() {
    return resto >= 0.5;
  }

  for (let i = 1; i <= mediaInteger; i++) {
    stars.push(<FaStar size={starSize} color="fb0" key={i} />);
  }

  return (
    <>
      {stars}
      {isHalfStarNeeded() ? <FaStarHalf size={starSize} color="fb0" /> : null}
    </>
  );
}
