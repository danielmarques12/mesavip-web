import styled from 'styled-components';

const Padding = 'padding: 20px 30px 0px 30px;';

export const Container = styled.div`
  .stars {
    display: flex;
  }
`;

export const Average = styled.div`
  ${Padding};
  width: 270px;
  text-align: center;

  h3 {
    font-size: 50px;
    font-weight: 500;
    margin-top: 20px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    margin-top: 12.5px;
  }
`;

export const NumberOfComments = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
  ${Padding};

  span {
    margin-left: 3px;
    color: #53565a;
    font-size: 16px;
  }

  svg {
    margin-top: 2.5px;
  }
`;

export const Rating = styled.div`
  ${Padding};
  font-size: 17px;
  font-weight: 400;

  .nome-data {
    display: flex;
    justify-content: space-between;
  }

  svg {
    margin-top: 10px;
  }
`;

export const Comment = styled.div`
  margin-top: 20px;
`;

export const Separator = styled.div`
  margin-bottom: 20px;
  padding: 0 30px;
  border: 0.1px solid rgba(0, 0, 0, 0.0275);
`;
