import React from 'react';

export default function ButtonsGuest() {
  return (
    <div className="buttons">
      <li>
        <a href="/signin">
          <button type="button">Sign in</button>
        </a>
      </li>
      <li>
        <a href="/signup">
          <button type="button">Sign up</button>
        </a>
      </li>
    </div>
  );
}
