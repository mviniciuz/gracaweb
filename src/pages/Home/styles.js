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
  top: 200px;
  left: 2vw;
  animation: 3.3s ${fadeInLeftAnimated} ;
  font-size: 2.5rem;
  font-weight: bold;
  color: #F6F6F6;
  background: #BDBDBD;
  width: 27vw;
  opacity:0.9;
  border-radius: 10px 10px;
  padding-left: 25px;
  z-index:5;

`

export const FadeIn02 = styled.div`
  position: absolute;
  top: 260px;
  left: 2vw;
  animation: 6.6s ${fadeInLeftAnimated} ;
  font-size: 2.5rem;
  font-weight: bold;
  color:#F6F6F6 ;
  background: #BDBDBD;
  width: 25vw;
  opacity:0.9;
  border-radius: 10px 10px;
  padding-left: 25px;
  z-index:5;
`

export const FadeIn03 = styled.div`
  position: absolute;
  top:320px;
  left: 2vw;
  animation: 13.2s ${fadeInLeftAnimated} ;
  font-size: 2.5rem;
  font-weight: bold;
  color: #F6F6F6;
  background: #BDBDBD;
  width: 20vw;
  opacity:0.9;
  border-radius: 10px 10px;
  padding-left: 25px;
  z-index:5;

  `;




