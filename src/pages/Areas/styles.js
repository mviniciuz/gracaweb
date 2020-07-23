import styled from 'styled-components';

const media = {
  desktop: '@media(max-width: 900px)',
};

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  .area-image {
    height: 15vh;
    width: 100%;

    ${media.desktop} {
      height: 10vh;
    }
  }

  .area-title {
    position: absolute;
    top: 210px;
    left: 42%;
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
    color: #ffffff;

    text-align: center;

    ${media.desktop} {
      left: 25%;
      top: 200px;
      text-align: center;
      font-size: 1.2rem;
      margin-top: 7px;
    }
  }
`;
