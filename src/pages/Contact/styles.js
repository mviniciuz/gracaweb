import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

const media = {
  desktop: '@media(max-width: 900px)',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .content-fale {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    width: 100%;

    > h1 {
      font-size: 1.7rem;
      position: absolute;
      color: #568a74;
      margin-top: 35px;
      ${media.desktop} {
        font-size: 1.2rem;
        margin-top: 7px;
      }
    }

    img {
      height: auto;
      width: 100%;
    }
  }

  .fale-conosco {
    display: flex;
    height: 60vh;
    width: 80%;

    ${media.desktop} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .form-contato {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
      justify-content: center;
    }
  }
  .contato {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
      display: none;
    }

    .item {
      display: flex;

      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      width: 90%;

      min-width: 350px;
      padding-left: 20%;
      margin-bottom: 30px;

      p {
        font-size: 0.8rem;
        font-weight: bold;
        color: #525252;
        padding-left: 10px;
      }
    }
  }

  h1 {
    text-align: center;
    font-size: 1.7rem;
    color: #568a74;
    margin-top: 30px;

    ${media.desktop} {
      font-size: 1.2rem;
    }
  }

  .content-trabalhe {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    height: 70vh;
    width: 100%;

    ${media.desktop} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    padding-left: 10%;
    padding-right: 10%;
  }

  .trabalhe-conosco {
    display: flex;
    flex: 1;
    height: 70vh;

    ${media.desktop} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .trabalhe-photo {
    display: flex;
    flex: 1;
    height: 70vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      height: auto;
      width: 75%;
    }

    ${media.desktop} {
      display: none;
    }
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  width: 100%;

  button {
    height: 30px;
    width: 120px;
    margin-top: 5px;
    background: #a0a0a0;
    border-radius: 5px;
    border: none;

    > p {
      font-size: 0.6rem;
      color: #ffffff;
    }
  }
`;
