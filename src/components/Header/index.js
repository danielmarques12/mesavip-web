/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Head } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  function redireciona_para_github() {
    window.open(
      `https://github.com/danielmarques12/mesavip-web`,
      '_blank',
      'noreferrer'
    );
  }

  return (
    <Head>
      <img src={logo} alt="Mesavip logo" />
      <nav>
        <ul onClick={() => redireciona_para_github()} className="github">
          <li>
            <FaGithub size={25} color="#000" />
          </li>
        </ul>
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
