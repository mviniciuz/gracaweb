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
  background-color: ${props => props.color};

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
      width: 60%;
    }
  }

  .text {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    align-self: flex-start;

    height: 100vh;

    h1 {
      padding-top: 30px;
      padding-bottom: 20px;
      text-align: left;
      font-size: 3.0em;
      color: #202020;
      min-width: 300px;
    }

    p {
      text-align: left;
      font-size: 1.5em;
      color: #4C6158;
      font-weight: bold;
      padding-left: 10px;

    }
  }

  .title {
    background-color: transparent;
    display: flex;
    flex:1;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    height: 35px;
    min-width: 300px;

  }
  .box-text {
    padding-left: 15%;
    padding-bottom: 30px;
  }
`;

