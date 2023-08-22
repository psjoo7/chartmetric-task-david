import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    padding: 0 !important;
  }
  html {
    font-family: 'Arial';
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    border: none;
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    all: unset; 
    cursor: pointer;
  }
`;

export default GlobalStyles;
