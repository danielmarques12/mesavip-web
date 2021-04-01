/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../../services/api';

export default function Banner(props) {
  const [banner, setBanner] = useState('');
  const restaurante_id = { props };

  useEffect(() => {
    api
      .post('getfiles', { restaurante_id, type: 'banner' })
      .then((item) => setBanner(item.data[0].path));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={banner} alt="Banner restaurante" />
    </div>
  );
}
