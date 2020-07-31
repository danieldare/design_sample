import styled from 'styled-components';

export const LogoStyle = styled.div`
  height: 25px;
  width: 25px;
  background: #22dd85;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 48%;
    width: 100%;
    background: black;
    height: 4px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 44.1%;
    width: 100%;
    background: black;
    height: 4px;
    transform: rotate(90deg);
  }
`;
