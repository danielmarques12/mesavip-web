import React from 'react';
import { logout } from '../../../services/auth';

export default function ButtonsConvidado() {
  return (
    <div className="buttons">
      <a href="/login">
        <button type="button">Entrar</button>
      </a>
      <a href="/sign-up">
        <button type="button">Criar uma conta</button>
      </a>
    </div>
  );
}
