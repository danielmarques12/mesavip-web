import styled from 'styled-components';

const Padding = 'padding: 10px 120px 0px 30px;';

export const Container = styled.div`
  text-align: center;

  span {
    font-weight: bold;
    font-size: 19px;
  }

  .main {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    p {
      font-size: 17px;
      line-height: 1.5;
    }

    .sobre {
      text-align: justify;
      font-size: 16px;
      margin: 0 auto;

      p {
        width: 19rem;
      }
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;

      .sobre {
        margin: 0;

        p {
          width: 400px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    ${Padding}
    text-align: unset;
  }
`;

export const Contact = styled.div`
  p {
    justify-content: center;
    margin: 35px auto;
    display: flex;
    align-items: center;

    svg {
      font-size: 22.5px;
      margin-right: 10px;
    }

    a {
      padding: 15px;
      border: 1px solid black;
      border-radius: 5px;
      text-decoration: none;
      color: #000;
      font-weight: bold;
    }

    a:hover {
      background: #f3f6fa;
      color: #000;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 30px;

    p {
      margin: 0 0 15px 0;
    }
  }
`;
