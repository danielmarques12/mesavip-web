import styled from 'styled-components';

const primary = (props) => props.theme.colors.primary;
const tableHeader = (props) => props.theme.table.header;
const tablePrimary = (props) => props.theme.table.primary;
const tableSecondary = (props) => props.theme.table.secondary;

export const Container = styled.div`
  color: ${primary};
  margin: 0 auto;
  display: table;
  text-align: center;

  h1 {
    color: ${primary};
    font-size: 20px;
    margin: 20px 0;
  }

  table {
    margin: 0 auto 50px auto;
    width: 100%;
  }

  th {
    background-color: ${tableHeader};
    color: #fff;
  }

  tr {
    &:nth-child(even) {
      background: ${tablePrimary};
    }

    &:nth-child(odd) {
      background: ${tableSecondary};
    }
  }

  th,
  td {
    border-collapse: collapse;
    padding: 15px 30px;
    text-align: left;
  }
`;
