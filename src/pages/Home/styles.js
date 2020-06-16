import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeInLeftAnimated = keyframes`${fadeInLeft} `;

const media = {
  desktop: '@media(max-width: 900px)'
}


export const Container = styled.div`
  display: flex;
  flex:1;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FadeIn01 = styled.div`
  position: absolute;
  top: 528px;
  left: 29vw;
  animation: 3s ${fadeInLeftAnimated};
  transform: scale(0);
  font-size: 2.5rem;
  font-weight: bold;
  color: #F6F6F6;
  z-index:5;

  ${media.desktop}{
    top: 285px;
    font-size: 1.1rem;
  }

`

export const FadeIn02 = styled.div`
  position: absolute;
  top: 528px;
  left: 29vw;
  animation: 3s ${fadeInLeftAnimated};
  animation-delay: 3s;

  transform: scale(0);
  font-size: 2.5rem;
  font-weight: bold;
  color:#F6F6F6 ;
  z-index:5;

  ${media.desktop}{
    top: 285px;
    font-size: 1.1rem;
  }
`

export const FadeIn03 = styled.div`
  position: absolute;
  top: 528px;
  left: 29vw;
  animation: 3s ${fadeInLeftAnimated} ;
  animation-delay: 6s;
  transform: scale(0);
  font-size: 2.5rem;
  font-weight: bold;
  color: #F6F6F6;

  z-index:5;

  ${media.desktop}{
    top: 285px;
    font-size: 1.1rem;
  }

  `;




