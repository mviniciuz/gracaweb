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

  .flex-column {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .photo {
    align-items: ${props => props.firstPhoto ? 'flex-end' : 'center'};
    height: 100vh;
    background: transparent;

    ${media.desktop}{
      align-items: center;
      height: 100%;
      width: 100vw;

    }

    img {
      height: 70%;
    }
  }

  .text {
    height: 100vh;
    background: transparent;

    ${media.desktop}{
      height: 100%;
      width: 100vw;
    }

    h1 {
      text-align: left;
      font-size: 3.0em;
      color: #202020;

      padding-left: ${props => props.firstPhoto ? '5%' : '20%'};
      padding-right: ${props => props.firstPhoto ? '20%' : '5%'};
      ${media.desktop}{
        padding-left: 12%;
        padding-right: 12%;
      }
    }

    p {
      text-align: justify;
      font-size: 1.4em;
      color: #202020;

      padding-top: 15px;
      padding-left: ${props => props.firstPhoto ? '5%' : '20%'};
      padding-right: ${props => props.firstPhoto ? '20%' : '5%'};

      ${media.desktop}{
        padding-left: 12%;
        padding-right: 12%;
      }
    }
  }

`;

