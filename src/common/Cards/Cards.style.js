import styled from 'styled-components';

export const CardsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;

  @media (max-width: 768px) and (max-width: 1024px) {
    //CSS
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* width: 80%;
    margin: 0 auto; */
  }

  @media (max-width: 767px) {
    //CSS
    display: grid;
    grid-template-columns: 1fr;
    /* width: 80%;
    margin: 0 auto; */
  }
`;
