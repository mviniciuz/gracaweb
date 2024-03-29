import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import 'react-perfect-scrollbar/dist/css/styles.css';

import Fonts from './Fonts';

const media = {
  desktop: '@media(max-width: 900px)'
}

export default createGlobalStyle`

  ${Fonts}

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
    font: 62.5% 'Roboto', sans-serif;

    ${media.desktop} {
      font: 40% 'Roboto', sans-serif;
    }
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
`;
