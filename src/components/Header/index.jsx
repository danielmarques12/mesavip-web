/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Nav, Separator } from './styles';
import ButtonsGuest from './ButtonsGuest';
import ButtonsUser from './ButtonsUser';
import { isAuthenticated } from '../../services/auth';

export default function Header() {
  return (
    <Nav>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="nav_toggle">
        <FaBars size={25} color="#000" className="menu" />
        <FaTimes size={25} color="#000" className="close" />
      </label>

      <ul className="nav_menu">
        <li className="logo">
          <a href="/">
            <img src="https://bit.ly/3sERTuX" alt="Mesavip logo" />
          </a>
        </li>

        <li className="on-hover">
          <a
            href="https://bit.ly/3tIw4v3"
            alt="Application github repo"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <FaGithub size={25} color="#000" />
          </a>
        </li>

        <li className="on-hover">
          <a className="text" href="/">
            Restaurants
          </a>
        </li>

        {isAuthenticated() ? (
          <>
            <li className="on-hover">
              <a href="/reservations">My reservations</a>
            </li>

            <li>
              <ButtonsUser />
            </li>
          </>
        ) : (
          <li>
            <ButtonsGuest />
          </li>
        )}
      </ul>
    </Nav>
  );
}
