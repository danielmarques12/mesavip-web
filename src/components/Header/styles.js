import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 28px 0px 24px;
  background: #fff;
  height: 75px;

  img {
    width: 165px;
    height: 75px;
  }

  nav {
    display: flex;
    align-items: center;
    height: 75px;

    a {
      text-decoration: none;
      font-size: 16px;
      color: #000;
      font-weight: 400;

      ul {
        cursor: pointer;

        li {
          list-style-type: none;
          padding: 30px 16px;
        }
      }
    }

    .github-link {
      text-align: center;
      width: 75px;
    }

    ul:hover {
      background: #f7f7f7;
    }

    .buttons {
      display: flex;
      margin-left: 12px;

      button {
        font-size: 17px;
        font-weight: bold;
        width: 160px;
        height: 55px;
        border-radius: 4px;
        border: 2px solid #000;
        color: #000;
        background: #fff;
      }

      button:hover {
        background: #f3f6fa;
        /* color: #fff; */
        font-weight: bold;
      }

      a:nth-child(2) {
        margin-left: 16px;
      }
    }
  }
`;
