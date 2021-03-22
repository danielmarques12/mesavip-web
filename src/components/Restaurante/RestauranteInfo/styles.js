import styled from 'styled-components';

const Padding = 'padding: 10px 10px 0px 10px;';

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
    border: 1px solid #fb0;
    padding: 5px;
    border-radius: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 5px;
      font-size: 20px;
      color: #fb0;
      font-weight: bold;
    }
  }
`;
