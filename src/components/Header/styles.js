import styled from 'styled-components';
import { Link } from 'react-router-dom';

const media = {
  desktop: '@media(max-width: 850px)'
}

export const Container = styled.header`
  flex: 1;
`;

export const Bar01 = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  background:#FFD8CB;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 7vw;
`;

export const SocialBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 150px;

  a {
    padding: 10px 10px;

    &:hover {
      position: relative;
      transition: $animate;
      transition-duration: 0.2s;
      opacity: 0.4;
      color: #C69077;
    }
  }

`

export const ConatactBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 150px;

  strong {
    color:#C69077;
  }
  a {
    color:#C69077;

    &:hover {
      position: relative;
      transition: $animate;
      transition-duration: 0.2s;
      opacity: 0.4;
    }
  }
`;

export const Bar02 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${media.desktop}{
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 75px;
  }

  height: 110px;
  width: 100%;
  background:#ffffff;
`;

export const Menu = styled.div`
  display: flex;
  ${media.desktop} {
    display: none;
  }

  flex-direction: column;
  justify-content:center;
  align-items:stretch;

  height: 80px;
  width: 80%;
  background: transparent;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    list-style-type: none;
  }
`;

export const ItemMenu = styled.li`

  height: 35px;
  padding: 4px;


  display: flex;
  flex-flow: column nowrap;
  justify-content:space-between;
  align-items:center;

  strong {
    font-size: 17px;
    color: #C69077;
    letter-spacing:1.2px;
  }

  &:hover {
    .bar-animation {
      display: flex;
      height: 1px;
      width: 100%;
      background: #FFD8CB;
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
  }
`;




