import styled from 'styled-components';

export const LandingScreenPageStyle = styled.div`
  color: #fff;
  z-index: 0;

  .banner-text-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    @media (max-width: 768px) and (max-width: 1024px) {
      //CSS

      padding: 7rem 0;
    }
  }

  .banner-img-container {
    width: 100%;
    height: 100%;

    img {
      height: auto;
      object-fit: cover;
      width: 100%;
    }

    @media (max-width: 1024px) {
      display: none;
    }

    @media (max-width: 768px) and (max-width: 1024px) {
      //CSS
      font-size: 3rem;
      line-height: 3rem;
      display: none;
    }
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 1024px) {
    //CSS
    display: block;
  }
`;

export const PrimaryText = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.03rem;
`;

export const PrimaryBriefText = styled.div`
  font-size: 2.9rem;
  font-weight: 500;
  width: 70%;
  line-height: 3.2rem;
  margin: 2.4rem 0;
  letter-spacing: -0.03rem;

  @media (max-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
    width: 100%;
  }
`;

export const BoldText = styled.div`
  font-size: 5rem;
  margin: 2rem 0;
  line-height: 7rem;
  font-family: 'Vollkorn', serif;
  width: 90%;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    font-size: 3.5rem;
    line-height: 3.5rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    //CSS
    font-size: 3.2rem;
    line-height: 3.9rem;
  }

  @media (max-width: 767px) {
    //CSS
    font-size: 3.5rem;
    line-height: 4.5rem;
  }
`;

export const SecondaryText = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 3.2rem;

  &.not-bold {
    font-weight: 300;
  }

  margin-bottom: 5rem;

  @media (max-width: 767px) {
    //CSS
    margin-bottom: 4rem;
  }
`;
