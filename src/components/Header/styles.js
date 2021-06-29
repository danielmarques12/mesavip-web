import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  overflow: hidden;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
  var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

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
    gap: 1rem;

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
        color: #000;
        font-weight: 300;
      }

      .text {
        font-size: 18px;
      }
    }
  }

  .github-link {
    text-align: center;
    width: 80px;
  }



  .on-hover {
    

    &:hover {
      background: #f7f7f7;
    }
  }

  .buttons {
    margin-bottom: 25px;

    button {
      font-size: 17px;
      font-weight: 400;
      width: 160px;
      height: 55px;
      border-radius: 4px;
      border: 2px solid #000;
      color: #000;
      background: #fff;
    }

    button:hover {
      background: #f3f6fa;
    }

    li:nth-child(1) {
      margin-bottom: 15px;
    }
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
  & {
    .nav_toggle {
      display: none;
    }

    .nav_menu {
      flex-direction: row;

      li {
        display: block;
      }
    }

    .buttons {
      margin-right: 12px;
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
`;
