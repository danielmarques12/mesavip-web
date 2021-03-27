import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 1170px;

  h3 {
    font-size: 15px;
    text-align: left;
    color: #000000;
    margin: 10px 0;
  }
`;

export const RestauranteList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
`;

export const RestauranteCard = styled.div`
  background: #fff;
  width: 283px;
  height: 235px;
  padding: 7px;
  margin-bottom: 25px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Produto = styled.div`
  img {
    width: 265px;
    height: 140px;
    border-radius: 5px;
  }

  .div-produto-titulo-e-nota {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    font-size: 16px;
    margin: 0 3px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;

    .div-nota {
      display: flex;
      justify-content: space-between;
    }

    strong {
      text-align: left;
    }

    span {
      color: #fb0;
      margin-left: 4px;
      font-size: 16px;
    }
  }
`;

export const DescricaoProduto = styled.div`
  color: #000000;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: 7.5px 3px 0 3px;

  .div-produto-culinaria-e-localizacao {
    p {
      margin-bottom: 7.5px;
      text-align: left;
    }
  }
`;
