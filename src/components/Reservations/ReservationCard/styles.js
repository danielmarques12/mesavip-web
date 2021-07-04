import styled from 'styled-components';

const primary = (props) => props.theme.colors.primary;
const backgroundPrimary = (props) => props.theme.background.primary;
const backgroundSecondary = (props) => props.theme.background.secondary;
const onHover = (props) => props.theme.onHover.primary;
const separator = (props) => props.theme.separator;

export const Container = styled.div`
  background: ${backgroundSecondary};
  width: 310px;
  height: 170px;
  padding: 7px;
  margin-bottom: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 100px;
  width: 275px;
  margin: 5px 0 0 5px;
`;

export const Date = styled.div`
  background: ${backgroundPrimary};
  color: inherit;
  width: 85px;
  height: 78px;
  border-radius: 10px;

  h2 {
    margin-top: 5px;
    font-size: 35px;
    font-weight: 500;
  }

  span {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const InfoWrapper = styled.div``;

export const NameAndLocation = styled.div`
  margin-top: 5px;

  span {
    font-weight: 500;
  }
`;

export const TimeAndAvgRate = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 7.5px;
`;

export const Nota = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fb0;

  span {
    margin-left: 4px;
  }
`;

export const Address = styled.div`
  margin-top: 12.5px;
  font-size: 11px;
`;

export const Separator = styled.div`
  width: 290px;
  margin: 0 auto 13.5px auto;
  padding: 0 3vv0px;
  border: 0.25px solid ${separator};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.125rem;
  height: 27px;
`;

export const Button = styled.button`
  background: ${backgroundSecondary};
  color: ${primary};
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 100px;
  height: 27px;
  font-size: 14px;

  &:hover {
    background: ${onHover};
  }
`;
