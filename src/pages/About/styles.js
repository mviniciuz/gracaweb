import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`
  display: flex;
  flex:1;

  flex-direction: column;
  justify-content: flex-start;

  .sobre-image{
    height: 15vh;
    max-width: 100%;

    ${media.desktop} {
      height: 10vh;
    }
  }

  .sobre-title {
    position: absolute;
    top: 210px;
    left: 45vw;
    font-size: 1.4rem;
    font-weight: bold;
    color: #ffffff;

    ${media.desktop} {
      top: 200px;
      left: 35vw;
    }

  }

  .container-slider{
    height: 55vh;
    width: 95%;
    padding-left: 5%;

    h1 {
      font-size: 2.5rem;
      color: #202020;
      padding-top:10px;
      padding-bottom: 40px;
      text-align: center;
    }

    div {
      height: 35vh;
      width: 100%;

      img {
        height: auto;
        width: 95%;
      }
    }
  }
`;


