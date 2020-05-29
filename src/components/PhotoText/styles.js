import styled from 'styled-components';

import Moldura from '../../assets/photoText/moldura.svg';

const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  flex-direction: ${props => (props.firstPhoto ? 'row' : 'row-reverse')};
  ${media.desktop} {
    flex-direction: ${props => (props.firstPhoto ? 'column' : 'column-reverse')};
  }

  .photo {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => (props.firstPhoto ? 'flex-end' : 'flex-start')};

    height: 100vh;
    background: transparent;

    ${media.desktop}{
      align-items: center;
      height: 100%;
      width: 100vw;
    }

    img {
      height: auto;
      width: 65%;
    }
  }

  .text {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    background: transparent;

    h1 {
      text-align: left;
      font-size: 3.0em;
      color: #202020;
      padding-left: ${props => (props.firstPhoto ? '5%' : '35%')};
      padding-right: ${props => (props.firstPhoto ? '35%' : '5%')};
      ${media.desktop}{
        padding-left: 5%;
        padding-right: 5%;
      }
    }

    p {
      text-align: justify;
      font-size: 1.4em;
      color: #202020;

      padding-top: 20px;
      padding-left: ${props => (props.firstPhoto ? '5%' : '35%')};
      padding-right: ${props => (props.firstPhoto ? '35%' : '5%')};
      ${media.desktop}{
        padding-left: 5%;
        padding-right: 5%;
      }
    }
  }

`;

