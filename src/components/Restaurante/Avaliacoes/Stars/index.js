/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

export default function Stars({ media }) {
  const resto = media % 1;
  const mediaInteger = Math.floor(media - resto);

  function isHalfStarNeeded() {
    return resto >= 0.5;
  }

  const stars = [];
  for (let i = 1; i <= mediaInteger; i++) {
    stars.push(<FaStar size={25} color="fb0" key={i} />);
  }

  return (
    <div className="stars">
      {stars}
      {isHalfStarNeeded() ? <FaStarHalf /> : null}
    </div>
  );
}
