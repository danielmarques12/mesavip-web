/* eslint-disable react/prop-types */
import React from 'react';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { Container } from './styles';

export default function Sobre(props) {
  const { restaurante } = props;

  return (
    <Container>
      <span>SOBRE O RESTAURANTE</span>
      <div className="sobre">
        <div>
          <p>
            {/* Inplementar https://stackoverflow.com/questions/28255937/how-to-use-read-more-toggle-for-dynamic-text */}
            {restaurante.sobre}
          </p>
        </div>
        <div>
          <p>
            <FaPhoneAlt /> {restaurante.telefone}
          </p>
          <p>
            <FaGlobe />{' '}
            <a href={restaurante.site} target="_blank" rel="noreferrer">
              Site do restaurante
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
