import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 1170px;
  h3 {
    color: #000000;
    margin-bottom: 10px;
  }
`;

export const RestauranteList = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  flex-wrap: wrap;
`;

export const RestauranteCard = styled.div`
  background: #fff;
  max-width: 25%;
  height: 200px;
  padding: 7px;
  margin: 0 0 10px 1%;
  text-align: center;
  border-radius: 7px;
  cursor: pointer;

  &:nth-child(-n + 3) {
    margin-right: 0px;
  }
`;

export const Produto = styled.div`
  width: 200px;

  img {
    width: 200px;
    height: 120px;
    border-radius: 7px;
  }

  .div-produto-titulo-e-nota {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    font-size: 13px;
    display: flex;
    padding: 5px 0;
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
    }
  }
`;

export const DescricaoProduto = styled.div`
  color: #000000;
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5px;

  .div-produto-culinaria-e-localizacao {
    p {
      margin-bottom: 5px;
      text-align: left;
    }
  }
`;
