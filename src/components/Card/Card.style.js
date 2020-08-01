import styled from 'styled-components';

export const CardStyle = styled.div`
  @media (max-width: 768px) {
    //CSS
    margin-bottom: 3.5rem;
  }
`;

export const CardImgContainer = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const CardTextContent = styled.div`
  padding: 0 25px;
  background: #fff;
  margin: 0;
  position: relative;
  top: -3px;
  padding: 3rem;
`;

export const TextTitle = styled.p`
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    //CSS
    font-size: 2.3rem;
  }
`;

export const TextBrief = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 3rem;
  margin: 0;

  @media (max-width: 768px) {
    //CSS
    font-size: 1.6rem;
  }
`;
