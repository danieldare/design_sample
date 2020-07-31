import styled from 'styled-components';

export const SubscribeSectionStyle = styled.div`
  background: #dcf9eb;
  background-attachment: fixed;
`;

export const InputHolder = styled.div`
  width: 100%;
  margin-top: 2rem;

  input {
    height: 7rem;
    border: none;
    outline: 0;
    padding: 0 20px;
    border-radius: 5px;
    width: 30%;
    font-size: 2rem;

    &::placeholder {
      color: #000;
    }

    @media (max-width: 768px) {
      //CSS
      height: 5rem;
      width: 80%;
      font-size: 1.7rem;
    }
  }

  .btn {
    height: 7rem;
    background: #000c2c;
    color: #fff;
    border: none;
    outline: 0;
    border-radius: 5px;
    margin-left: 2rem;
    cursor: pointer;
    padding: 0 5rem;
    font-size: 2.3rem;
    font-weight: 500;

    @media (max-width: 768px) {
      //CSS
      height: 5rem;
      font-size: 1.7rem;
      margin-top: 3rem;
    }
  }
`;

export const HeadingText = styled.div`
  font-weight: 700;
  color: #000;
  font-size: 5rem;
  letter-spacing: -0.1rem;
  margin: 3.9rem 0;
  line-height: 7rem;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    font-size: 3rem;
    line-height: 5rem;
  }

  @media (max-width: 768px) {
    //CSS
    font-size: 2.5rem;
    line-height: 4rem;
  }
`;

export const SubscribeSectionContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  margin: 0 auto;
  text-align: center;
`;
