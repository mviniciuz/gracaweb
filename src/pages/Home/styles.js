import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeInLeftAnimated = keyframes`${fadeInLeft} `;


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

`

export const FadeIn02 = styled.div`
  position: absolute;
  top: 528px;
  left: 27vw;
  animation: 3s ${fadeInLeftAnimated};
  animation-delay: 3s;

  transform: scale(0);
  font-size: 2.5rem;
  font-weight: bold;
  color:#F6F6F6 ;
  width: 25vw;
  opacity:0.9;
  border-radius: 10px 10px;
  padding-left: 25px;
  z-index:5;
`

export const FadeIn03 = styled.div`
  position: absolute;
  top: 528px;
  left: 27vw;
  animation: 3s ${fadeInLeftAnimated} ;
  animation-delay: 6s;
  transform: scale(0);
  font-size: 2.5rem;
  font-weight: bold;
  color: #F6F6F6;
  width: 20vw;
  opacity:0.9;
  border-radius: 10px 10px;
  padding-left: 25px;
  z-index:5;

  `;




