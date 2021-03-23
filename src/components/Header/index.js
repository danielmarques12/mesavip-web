import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Head } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Head>
      <img src={logo} alt="Mesavip logo" />
      <nav>
        <a
          href="https://github.com/danielmarques12/mesavip-web"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          <ul>
            <li>
              <FaGithub size={25} color="#000" />
            </li>
          </ul>
        </a>
        <a href="/">
          <ul>
            <li>Restaurantes</li>
          </ul>
        </a>
        <a href="/">
          <ul>
            <li>Como funciona</li>
          </ul>
        </a>
        <a href="/">
          <ul>
            <li>Planos</li>
          </ul>
        </a>

        <div className="buttons">
          <a href="/login">
            <button type="button">Login</button>
          </a>
          <a href="/sign-up">
            <button type="button" className="signup">
              Criar uma conta
            </button>
          </a>
        </div>
      </nav>
    </Head>
  );
}
