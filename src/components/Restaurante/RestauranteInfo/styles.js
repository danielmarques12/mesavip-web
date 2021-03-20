import styled from 'styled-components';

const Padding = 'padding: 10px 20px 0px 15px;';

export const Container = styled.div`
  background: #fff;
  height: fit-content;
`;

export const Info = styled.div`
  ${Padding};
  display: flex;
  justify-content: space-between;
`;
export const Detalhes = styled.div`
  p {
    margin: 10px 0;
  }
`;

export const Nota = styled.div`
  .nota {
    border: 2px solid #fb0;
    border-radius: 15px;
    height: 35px;
    margin-bottom: 10px;
    text-align: center;

    span {
      font-size: 25px;
      color: #fb0;
      font-weight: bold;
    }
  }
`;
