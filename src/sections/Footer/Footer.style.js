import styled from 'styled-components';

export const FooterStyle = styled.div`
  background: #000c2c;
  height: 60vh;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    height: 50vh;
  }

  .footer-container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    justify-content: space-between;

    &.top {
      margin-bottom: 7rem;
    }

    @media (max-width: 767px) {
      //CSS

      font-size: 1.4rem;
      line-height: 2.1rem;
      display: flex;
      justify-content: center;
      flex-direction: column-reverse;
      margin: 2rem auto;
    }

    .brand-section {
      display: flex;

      @media (max-width: 767px) {
        margin: 5rem auto;
      }

      .brand-text {
        margin-left: 30px;

        @media (max-width: 767px) {
          //CSS

          margin-left: 10px;
        }

        .brand-name-text,
        .brand-motto {
          margin: 0;
          margin-bottom: 0;
          font-size: 2.2rem;
          font-weight: 500;

          @media (max-width: 768px) and (max-width: 1024px) {
            //CSS
            font-size: 1.8rem;
          }

          @media (max-width: 767px) {
            //CSS

            font-size: 1.4rem;
          }
        }

        .brand-motto {
          font-size: 1.8rem;
          margin: 1rem 0;

          @media (max-width: 767px) {
            //CSS

            font-size: 1.4rem;
            margin: 0.2rem 0;
          }
        }
      }
    }

    .copyright {
      font-size: 1.4rem;
    }

    .social-icons {
      justify-self: start-end;
    }
  }

  .bottom {
    display: flex;
    width: 90%;

    @media (max-width: 767px) {
      //CSS
      align-items: center;
    }
  }

  .footer_links_holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0;

    @media (max-width: 767px) {
      //CSS

      width: 100%;
    }
  }

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      font-size: 2.1rem;
      font-weight: 400;
      line-height: 5rem;

      @media (max-width: 768px) and (max-width: 1024px) {
        //CSS
        font-size: 1.8rem;
      }

      @media (max-width: 767px) {
        //CSS

        font-size: 1.4rem;
        line-height: 2.1rem;
      }
    }

    li:first-child {
      margin-bottom: 2.3rem;
      font-weight: 500;
      line-height: 3rem;

      @media (max-width: 768px) and (max-width: 1024px) {
        //CSS
        font-size: 1.8rem;
      }

      @media (max-width: 767px) {
        //CSS
        font-size: 1.4rem;
        line-height: 1rem;
      }
    }
  }
`;

export const FooterContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
