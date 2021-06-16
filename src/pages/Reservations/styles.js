import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  margin: 0 auto;
  display: table;
  text-align: center;

  h1 {
    font-size: 20px;
    margin: 20px 0;
  }

  table {
    margin: 0 auto;
  }

  th {
    background-color: #808692;
    color: #fff;
  }

  tr {
    &:nth-child(even) {
      background: #fff;
    }

    &:nth-child(odd) {
      background: #e6e7e9;
    }
  }

  th,
  td {
    border-collapse: collapse;
    padding: 15px 30px;
  }
`;
