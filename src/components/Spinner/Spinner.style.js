import styled from 'styled-components';

const SpinnerStyle = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin: 0 auto;
  border-radius: 50%;
  transition: all 300 ease;
  color: red;
  background: transparent;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border: ${(props) => props.borderWidth} solid red;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { SpinnerStyle };
