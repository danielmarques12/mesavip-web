import styled from 'styled-components';

export const Container = styled.div`
  color: #000;

  strong,
  h1 {
    color: #000;
    font-weight: 300;
  }
`;

export const Banner = styled.div`
  text-align: center;
`;

export const Main = styled.div`
  margin: 0 auto;

  .grid {
    width: 1200px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 69% 31%;
  }
`;
