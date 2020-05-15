import { createGlobalStyle } from 'styled-components';

//import 'react-toastify/dist/ReactToastify.css';

import 'react-perfect-scrollbar/dist/css/styles.css';

import MontserratFont from './Fonts';

export default createGlobalStyle`

  ${MontserratFont}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline:0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-somoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Montserrat';
  }

  a {
    text-decoration:none;
  }
  ul {
     cursor: pointer;
  }
  button {
    cursor: pointer;
  }
  strong {
    font: 17px 'Montserrat', sans-serif;
  }
`;
