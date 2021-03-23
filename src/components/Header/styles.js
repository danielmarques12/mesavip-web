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
        font-size: 16px;
        font-weight: 700;
        padding: 7.5px 10px;
        border-radius: 4px;
        border: 2px solid #db1313;
        color: #db1313;
        background: #fff;
      }

      button:hover {
        background: #db1313;
        color: #fff;
      }

      .signup {
        margin-left: 16px;
      }
    }
  }
`;
