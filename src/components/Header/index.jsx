/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { Nav } from './styles';
import ButtonsGuest from './ButtonsGuest';
import ButtonsUser from './ButtonsUser';
import { isAuthenticated } from '../../services/auth';

export default function Header({ toggleTheme }) {
  const { colors, title, logo } = useContext(ThemeContext);
  const switchIconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '88.75%',
    fontSize: 25,
  };

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
            <img src={logo} alt="Mesavip logo" />
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
            <FaGithub size={25} color={colors.primary} />
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
              <a href="/reservations" className="text">
                My reservations
              </a>
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

        <li className="switch-theme">
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            height={40}
            width={80}
            // borderRadius={25}
            handleDiameter={10}
            checkedIcon={false}
            uncheckedIcon={false}
            uncheckedHandleIcon={<div style={switchIconStyle}>🌞</div>}
            checkedHandleIcon={<div style={switchIconStyle}>🌑</div>}
            offColor="#2d333b"
            onColor="#fff"
            onHandleColor="#fff"
            offHandleColor="#2d333b"
          />
        </li>
      </ul>
    </Nav>
  );
}
