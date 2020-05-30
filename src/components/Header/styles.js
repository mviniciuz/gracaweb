import styled from 'styled-components';
import { Link } from 'react-router-dom';

const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.header`
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.desktop}{
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-right: 10%;
    padding-left: 5%;
  }

  height: 175px;
  width: 100%;
  background:#ffffff;

  .social {
    position: absolute;
    left: 73%;

    ${media.desktop}{
      left: 0;
      position:static;


    }

  }
`;

export const ContentSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 100%;
`;

export const Img = styled.img`
  display: flex;
  ${media.desktop}{
    display: none;
  }
  height: 125px;
  width: 100%;
  padding-bottom: 5px;
`;

export const Menu = styled.div`
  display: flex;
  background: #e7e7e7;
  ${media.desktop} {
    display: none;
  }

  flex-direction: column;
  justify-content:center;
  align-items:stretch;

  height: 45px;
  width: 100%;

  padding-left: 16%;
  padding-right: 16%;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    list-style-type: none;
  }
`;

export const ItemMenu = styled.li`

  height: 25px;
  padding-top: 5px;

  display: flex;
  flex-flow: column nowrap;
  justify-content:space-around;
  align-items:center;

  strong {
    font-size: 1.2em;
    color: #646464;


    &:hover {
      position: relative;
      transition: $animate;
      transition-duration: 0.2s;
      opacity: 1;
      color: #007641;
    }
  }

  &:hover {
    .bar-animation {
      display: flex;
      height: 2px;
      width: 100%;
      position: relative;
      background: #007641;
      transition: $animate;
      transition-duration: 0.8s;
      opacity: 0.7;
    }
  }


`;

export const Button = styled.button`
    display: none;
    ${media.desktop}{
      display: flex;
    }
    background: transparent;
    height: 40px;
    width: 40px;
    border: none;

    &:hover {
      position: relative;
      transition: $animate;
      transition-duration: 0.2s;
      opacity: 0.4;
    }
`;

export const ImgMenu = styled.img`
  display: none;

  ${media.desktop}{
    display: flex;
    height: 250px;
  }
`;






