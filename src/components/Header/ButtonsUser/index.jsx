import React from 'react';
import { logout } from '../../../services/auth';

export default function ButtonsUser() {
  return (
    <div className="buttons">
      <a href="/profile">
        <button type="button">Profile</button>
      </a>
      <a href="/">
        <button onClick={() => logout()} type="button">
          Logout
        </button>
      </a>
    </div>
  );
}
