import styled from 'styled-components';

const shadow = `--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
0 2px 4px -1px rgba(0, 0, 0, 0.06);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);`;

const background = (props) => props.theme.background.secondary;
const primary = (props) => props.theme.colors.primary;
const onHover = (props) => props.theme.onHover.primary;

export const Nav = styled.nav`
  background: ${background};
  overflow: hidden;
  ${shadow}

  img {
    width: 165px;
    height: 80px;
  }

  .checkbox {
    display: none;
  }

  .nav_toggle {
    position: absolute;
    cursor: pointer;
    right: 0;
    margin: 0rem 1rem;

    .checkbox {
      display: none;
    }

    .close {
      display: none;
      margin-top: 1.5rem;
    }

    .menu {
      margin-top: 1.5rem;
    }
  }

  .nav_menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${shadow}

    .logo {
      margin-left: 10px;
    }

    .switch-theme {
      margin: 0 25px;

      .switch-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 20;
      }
    }

    li {
      cursor: pointer;
      list-style: none;
      display: none;

      &:first-child {
        margin-right: auto;
        display: block;
      }

      a {
        text-decoration: none;
        font-size: 16px;
        color: ${primary};
        font-weight: 400;
      }

      .text {
        font-size: 18px;
      }
    }
  }

  .github-link {
    text-align: center;
    width: 80px;
    padding: 0 20px;
  }

  .on-hover {
    padding: 10px 5px;

    &:hover {
      background: ${onHover};
    }
  }

  .buttons {
    margin-bottom: 25px;
    margin-top: 20px;

    button {
      font-size: 17px;
      font-weight: 400;
      width: 160px;
      height: 55px;
      border-radius: 4px;
      border: 2px solid ${primary};
      color: ${primary};
      background: ${background};
    }

    button:hover {
      background: ${onHover};
    }

    li:nth-child(1) {
      margin-bottom: 15px;
    }
  }

  // Toggle the hamburger menu in mobile view
  #checkbox:checked ~ ul.nav_menu li {
    display: block;
  }

  //Change from menu to close icon on tap
  #checkbox:checked ~ label.nav_toggle .close {
    display: block;
  }

  #checkbox:checked ~ label.nav_toggle .menu {
    display: none;
  }

  // Desktop view
  @media only screen and (min-width: 768px) {
    .separator {
      display: none;
    }

    & {
      .nav_toggle {
        display: none;
      }

      .nav_menu {
        flex-direction: row;
        --tw-shadow: 0;
        box-shadow: 0;

        li {
          display: block;
        }
      }

      .on-hover {
        padding: 30px 20px;
      }

      .buttons {
        margin-right: 12px;
        margin-left: 30px;
        margin-top: 0;
        margin-bottom: 0;
        display: flex;

        li:nth-child(1) {
          margin-bottom: 0;
        }

        li:nth-child(2) {
          margin-left: 16px;
          margin-bottom: 0;
        }
      }
    }
  }
`;
