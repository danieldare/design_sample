import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Rubik', sans-serif;
  }

  html{
      font-size: 62.5%;
  }
`;

export default GlobalStyle;
