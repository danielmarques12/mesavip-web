import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  background: #fff;
  width: 460px;
  height: 440px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  padding-top: 20px;

  a {
    color: #db1313;
  }
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 400px;
  height: 70px;
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

export const Separator = styled.div`
  align-items: center;
  text-align: center;
  margin: 20px 16px;
  border-bottom: 1px solid #dadde1;
  display: flex;
`;

export const CreateAccountLink = styled.div`
  a {
    text-decoration: none;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    width: 400px;
    height: 70px;
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid #dddfe2;
    border-radius: 6px;
    background-color: #42b72a;
    color: #fff;

    &:hover {
      background-color: #399e24;
    }
  }
`;

export const Text = styled.div`
  padding: 50px;

  h3 {
    color: #222;
    font-size: 24px;
    font-weight: 400;

    span {
      color: #bd1414;
    }
  }
`;
