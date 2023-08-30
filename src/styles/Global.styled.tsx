import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  a {
    text-decoration: none;
}

  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
  }
`