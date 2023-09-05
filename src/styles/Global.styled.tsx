import styled, {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

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
    color: ${theme.colors.font};
    line-height: 1.2;
  }


  a {
    text-decoration: none;
}

  ul {
    list-style: none;
  }
  
  //li {
  //  color: #828282;
  //}
  
  button {
    background-color: unset;
    border: none;
  }
  
  section {
    padding: 120px 0;
  }
  
  section:nth-of-type(odd) {
    background-color: ${theme.colors.backgroundSection};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.primaryBg};
  }
`