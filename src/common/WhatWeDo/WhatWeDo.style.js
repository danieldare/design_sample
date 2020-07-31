import styled from 'styled-components';

export const WhatWeDoContainerStyle = styled.div`
  background: #f7f7f7;
`;

export const WhatWeDoStyle = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  margin: 0;
  color: #fff;
  height: 100%;
  margin: 0 auto;
  width: 95%;
  padding: 5rem 0;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    display: block;
    width: 80%;
  }
`;

export const Hr = styled.div`
  height: 0.1rem;
  background: #000;
  width: 100%;
  margin-bottom: 3rem;
`;

export const MainContent = styled.div`
  color: #000;

  .btn-container {
    justify-content: flex-end;
    display: flex;
    width: 100%;
  }
`;

export const RotatedTextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const RotatedText = styled.p`
  font-size: 6rem;
  transform: rotate(90deg);
  color: #000;
  position: absolute;
  width: max-content;
  top: 110px;
  font-weight: 900;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    transform: rotate(0deg);
    position: relative;
    top: 0px;
    font-size: 3rem;
  }
`;

export const Button = styled.div`
  padding: 20px;
  margin-right: auto;
  background: #000c2c;
  color: #fff;
  font-size: 1.8rem;
  display: inline-block;
  border-radius: 5px;
  margin: 40px 0;
  display: inline-flex;
  align-items: center;
  justify-self: flex-end;

  @media (max-width: 768px) {
    //CSS
    padding: 10px 10px;
    font-size: 1.5rem;
  }

  .arrow {
    fill: #fff;
    height: 5rem;
    margin-left: 3rem;
    stroke-width: 1rem;

    @media (max-width: 768px) {
      //CSS
      margin-left: 1rem;
      height: 3rem;
    }
  }
`;
