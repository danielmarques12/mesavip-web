import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 92.5%;
  height: 50px;
  padding: 15px;
  font-size: 17px;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  color: #1d2129;
`;

export const SubmitInput = styled(Input)`
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-color: #db1313;
  cursor: pointer;

  &:hover {
    background-color: #bd1414;
  }
`;
