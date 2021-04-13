import styled from 'styled-components';

const Padding = 'padding: 10px 20px 0px 20px;';

export const Container = styled.div`
  background: #fff;
  margin: 0 auto;
  font-size: 17px;
  ${Padding}
  width: 250px;
  height: 150px;

  .horarios-mesas {
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-top: 20px;
    background: #db1313;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid transparent;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
  }

  button:hover {
    background: #be0a0a;
  }
`;

export const Horarios = styled.div`
  align-items: center;
`;

export const Select = styled.select`
  margin-top: 10px;
  font-size: 17px;
  width: 100px;
  height: 30px;
  border-radius: 3px;
  border: 0 0 1px 0px;
  background: #fff;
`;
