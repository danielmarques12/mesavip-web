import styled from 'styled-components';

const Padding = 'padding: 10px 120px 0px 30px;';

export const Container = styled.div`
  ${Padding}

  span {
    font-weight: bold;
  }

  .sobre {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 17px;
    }

    div:nth-child(1) {
      width: 400px;
      text-align: justify;
      font-size: 16px;
    }

    div:nth-child(2) {
      p {
        margin-bottom: 15px;
        display: flex;
        align-items: center;

        svg {
          font-size: 22.5px;
          margin-right: 10px;
        }

        a {
          padding: 7.5px;
          border: 1px solid #db1313;
          border-radius: 5px;
          text-decoration: none;
          color: #db1313;
          font-weight: bold;
        }

        a:hover {
          background: #db1313;
          color: #fff;
        }
      }
    }
  }
`;
