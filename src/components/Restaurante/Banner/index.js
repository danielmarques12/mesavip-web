/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../../services/api';

export default function Banner(props) {
  const [banner, setBanner] = useState('');
  const url = 'http://localhost:3333/files';

  useEffect(() => {
    api
      .get(`restaurantes/banner/${props.id}`)
      .then((item) => setBanner(item.data[0].path));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={`${url}/${banner}`} alt="Banner restaurante" />
    </div>
  );
}
