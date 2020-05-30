import styled from 'styled-components';

const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`

  flex:1;
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;

  height: 35px;

  a {
    padding: 2px 2px;

    &:hover {
      transition: $animate;
      transition-duration: 0.2s;
      opacity: 0.7;
    }

    img {
      height: 28px;
      width: 28px;
    }
  }

`;
