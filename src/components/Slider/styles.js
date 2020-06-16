import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeInLeftAnimated = keyframes`${fadeInLeft} `;




const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`
  width: 100%;
  height:80vh;

  ${media.desktop}{
    height: 10%;
  }

  .slide-container {
    width: 100%;
    max-height:60vh;

    ${media.desktop}{
    height: 10%;
    }


  }

  h3 {
    text-align: center; }

  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 300px;
  }

  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }

  .each-fade {
    display: flex;
    min-width: 100%;
  }

  .each-fade .image-container {
    width: 100%;
    overflow: hidden;
  }

  .each-fade .image-container img {
    width: 100%;
  }

  .each-fade h2 {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background: #ffffff;
  }
`;

