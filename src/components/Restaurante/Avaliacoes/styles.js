import styled from 'styled-components';

const Padding = 'padding: 20px 30px 0px 30px;';

export const Container = styled.div`
  .stars {
    display: flex;
  }
`;

export const Media = styled.div`
  ${Padding};
  width: 270px;
  text-align: center;

  h3 {
    font-size: 50px;
    font-weight: 800;
    margin-top: 20px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    margin-top: 12.5px;
  }
`;

export const ContadorDeComentarios = styled.div`
  display: flex;
  width: 265px;
  justify-content: space-between;
  ${Padding};

  span {
    color: #53565a;
    font-size: 16px;
  }

  svg {
    margin-top: 2.5px;
  }
`;

export const Avaliacao = styled.div`
  ${Padding};
  font-size: 17px;
  font-weight: 500;

  .separador {
    margin-bottom: 20px;
    padding: 0 30px;
    border: 0.1px solid rgba(0, 0, 0, 0.0275);
  }

  .nome-data {
    display: flex;
    justify-content: space-between;
  }

  .stars {
    margin: 10px 0;
  }
`;
export const Comentario = styled.div`
  margin-top: 20px;
`;
