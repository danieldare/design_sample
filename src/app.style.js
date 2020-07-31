import styled from 'styled-components';

export const AppStyle = styled.div``;

export const BannerContainerStyle = styled.div`
  height: 100vh;
  background: #000c2c;
  position: relative;

  .banner-responsive-img {
    display: none;
  }

  @media (max-width: 1024px) {
    //CSS
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    //CSS
    height: 100%;
  }

  @media (max-width: 1024px) {
    .overlay {
      background: #c5343485;
      height: 100%;
      width: 100%;
      top: 0;
      position: absolute;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        background: linear-gradient(to bottom, rgb(49 49 49 / 70%) 0%, #000c2c 100%);
      }

      .banner-responsive-img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
      }
    }
  }
`;
