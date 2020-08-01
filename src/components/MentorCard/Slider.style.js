import styled from 'styled-components';

export const MentorCardStyle = styled.div`
  color: #fff;
  transition: transform 300ms ease-in;
  position: relative;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    margin: 3rem 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const MentorCardTextContent = styled.div`
  .arrow_holder {
    margin: 3rem 0;
  }
`;

export const MentorCardImgContainer = styled.div`
  width: 690px;
  height: auto;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const MentorCardTitle = styled.div`
  font-size: 4rem;
  margin: 2rem 0;
  color: #22dd85;
  font-weight: 700;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    //CSS
    font-size: 2.5rem;
  }
`;

export const MentorCardBrief = styled.div`
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 3rem;
  margin: 0;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    font-size: 1.6rem;
  }
`;
