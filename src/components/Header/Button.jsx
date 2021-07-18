/* eslint-disable react/prop-types */
import React from 'react';
import { logout } from '../../services/auth';

export default function Button(props) {
  const { text, href, signout } = props;

  return (
    <div className="buttons">
      <a href={href}>
        <button onClick={signout ? () => logout() : null} type="button">
          {text}
        </button>
      </a>
    </div>
  );
}
