/* eslint-disable react/prop-types */
import React from 'react';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { Container, Contact } from './styles';

export default function About(props) {
  const { restaurant } = props;

  return (
    <Container>
      <span>About the restaurant</span>
      <div className="main">
        <div className="sobre">
          <p>
            {/* Inplementar https://stackoverflow.com/questions/28255937/how-to-use-read-more-toggle-for-dynamic-text */}
            {restaurant.about}
          </p>
        </div>
        <Contact>
          <p className="phone">
            <FaPhoneAlt /> {restaurant.phone}
          </p>
          <p className="site">
            <FaGlobe />
            <a href={restaurant.site} target="_blank" rel="noreferrer">
              Restaurant site
            </a>
          </p>
        </Contact>
      </div>
    </Container>
  );
}
