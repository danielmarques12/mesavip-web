import React from 'react';
import { logout, isRestaurant } from '../../../services/auth';

export default function ButtonsUser() {
  return (
    <div className="buttons">
      {isRestaurant() ? (
        <a href="/profile">
          <button type="button">Profile</button>
        </a>
      ) : null}

      <a href="/">
        <button onClick={() => logout()} type="button">
          Logout
        </button>
      </a>
    </div>
  );
}
