import React from 'react';

import { Head } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Head>
      <img src={logo} alt="Mesavip logo" />

      <nav>
        <ul>
          <li>
            <a href="/">Restaurantes</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Como funciona</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Links</a>
          </li>
        </ul>

        <div className="buttons">
          <button type="button" className="login">
            Login
          </button>
          <button type="button" className="signup">
            Criar uma conta
          </button>
        </div>
      </nav>
    </Head>
  );
}
