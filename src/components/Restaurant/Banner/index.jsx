/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../../services/api';

export default function Banner(props) {
  const [banner, setBanner] = useState('');
  const { restaurant_id } = props;

  useEffect(() => {
    api
      .get(`files/list/${restaurant_id}/banner`)
      .then((item) => setBanner(item.data[0].path));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={banner}
        alt="Restaurant banner"
        style={{
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
      />
    </div>
  );
}
