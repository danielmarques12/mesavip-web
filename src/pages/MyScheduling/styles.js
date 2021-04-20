import styled from 'styled-components';

export const Container = styled.div`
  display: table;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  width: 400px;
  height: 400px;
  margin-top: 7.5px;
  border-radius: 5px;
  color: #000;
  padding-bottom: 10px;

  h3 {
    padding: 10px 0;
  }
`;

export const SchedulingList = styled.div`
  font-size: 16px;

  ul {
    text-align: left;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    text-align: center;
  }

  li {
    background-color: rgba(243, 246, 250, 0.603);
    border-radius: 5px;
    width: 100%;
    list-style-type: none;
    padding: 5px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const DeleteSchedule = styled.a`
  width: 75%;
  margin: 0 auto;
  cursor: pointer;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: #db1313;

  &:hover {
    background-color: #db1313;
    color: #fff;
  }

  svg {
    margin-left: 5px;
  }
`;
