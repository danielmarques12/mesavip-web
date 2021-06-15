import React from 'react';
import { logout } from '../../../services/auth';

export default function ButtonsGuest() {
  return (
    <div className="buttons">
      <a href="/signin">
        <button type="button">Sign in</button>
      </a>
      <a href="/signup">
        <button type="button">Sign up</button>
      </a>
    </div>
  );
}
