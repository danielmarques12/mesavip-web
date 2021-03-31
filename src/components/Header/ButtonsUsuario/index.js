import React from 'react';
import { logout } from '../../../services/auth';

export default function ButtonsUsuario() {
  return (
    <div className="buttons">
      <a href="/perfil">
        <button type="button">Perfil</button>
      </a>
      <a href="/">
        <button onClick={() => logout()} type="button">
          Sair
        </button>
      </a>
    </div>
  );
}
