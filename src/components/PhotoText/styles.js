import styled from 'styled-components';

const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`
  display: flex;
  flex:1;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${props => (props.firstPhoto ? 'row' : 'row-reverse')};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  ${media.desktop} {
    flex-direction: ${props => (props.firstPhoto ? 'column' : 'column-reverse')};
  }

  .photo {
    flex:1;
    height: 100vh;
    background: red;

    ${media.desktop}{
      height: 100%;
      width: 100vw;
    }
  }

  .text {
    display: flex;
    flex: 1;
    height: 100vh;
    background: blue;
    ${media.desktop}{
      height: 100%;
      width: 100vw;
    }
    flex-direction: column;
    justify-content: center;
    align-items: center;


    p {
      text-align: justify;
      padding-left: 40px;
      padding-right: 40px;
      font-size: 1.3em;
    }
  }
`;
