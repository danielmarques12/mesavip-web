import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 28px 0px 24px;
  background: #fff;
  height: 80px;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  img {
    width: 165px;
    height: 80px;
  }

  nav {
    display: flex;
    align-items: center;
    height: 80px;
    overflow: hidden;

    a {
      text-decoration: none;
      font-size: 16px;
      color: #000;
      font-weight: 600;

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
      width: 80px;
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
