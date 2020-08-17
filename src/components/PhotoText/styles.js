import styled from 'styled-components';

const media = {
  desktop: '@media(max-width: 900px)',
};

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${(props) => (props.firstPhoto ? 'row' : 'row-reverse')};
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.tamHeight ? props.tamHeight : '100vh')};
  width: 100%;

  ${media.desktop} {
    flex-direction: column-reverse;
    height: 100vh;
    width: 100vw;
  }

  background-color: ${(props) => props.color};

  .photo {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) => (props.firstPhoto ? 'flex-end' : 'flex-start')};

    height: ${(props) => (props.tamHeight ? props.tamHeight : '100vh')};
    background: transparent;

    ${media.desktop} {
      align-items: center;
    }

    img {
      height: auto;
      width: 65%;

      ${media.desktop} {
        width: 60%;
      }
    }
  }

  .text {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: ${(props) => (props.tamHeight ? props.tamHeight : '100vh')};
    background: transparent;

    h1 {
      text-align: left;
      font-size: 2rem;
      color: #202020;
      padding-left: ${(props) => (props.firstPhoto ? '5%' : '35%')};
      padding-right: ${(props) => (props.firstPhoto ? '35%' : '5%')};
      ${media.desktop} {
        padding-left: 5%;
        padding-right: 5%;
      }
    }

    p {
      text-align: justify;
      font-size: 0.9rem;
      color: #202020;

      line-height: 1.3em;

      padding-top: 20px;
      padding-left: ${(props) => (props.firstPhoto ? '5%' : '35%')};
      padding-right: ${(props) => (props.firstPhoto ? '35%' : '5%')};
      ${media.desktop} {
        font-size: 0.8rem;
        padding-left: 5%;
        padding-right: 5%;
      }
    }
  }
`;
