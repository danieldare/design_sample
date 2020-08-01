import styled from 'styled-components';

export const MentorsStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-column-gap: 55px;
  justify-content: center;
  height: 100vh;
  align-items: center;
  position: relative;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    height: 100%;
    width: 80%;
    margin: 0 auto;
  }
`;

export const MentorsContainer = styled.div`
  overflow: hidden;
  background: #000c2c;
`;

export const TextHeading = styled.p`
  font-weight: 900;
  text-align: center;
  color: #fff;
  font-size: 6rem;
  margin: 0;
  position: relative;
  top: 30px;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    font-size: 3rem;
    position: relative;
    top: 0px;
    margin: 3rem 0;
  }
`;
