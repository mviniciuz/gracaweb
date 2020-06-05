import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;

  .content-fale {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    width: 100%;

    h1 {
      font-size:2rem;
      position: absolute;
      color: #568A74;
      margin-top: 35px;
      ${media.desktop}{
        font-size: 1.2rem;
        margin-top: 7px;
        height: 100vh;
     }
    }

    img {
      height:auto;
      width: 100%;
    }
  }

  .fale-conosco{
    display:flex;
    height: 60vh;
    width: 100%;

    ${media.desktop}{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 120vh;
     }
  }

  .form-contato {
    display: flex;
    flex:1;
    justify-content: flex-end;
    align-items: center;

    ${media.desktop}{
      justify-content: center;
     }

  }
  .contato{
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      ${media.desktop}{
        padding-top: 5%;
        padding-left:10%;
      }

      .item {
        display: flex;

        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        width: 90%;

        min-width: 350px;
        margin-bottom: 30px;

        p {
          font-size: 0.8rem;
          font-weight:bold;
          color: #525252;
          padding-left: 10px;
        }
      }
    }

  .content-trabalhe {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%;

    h1 {
      font-size:2rem;
      position: absolute;
      color: #568A74;
      margin-top: 35px;
      ${media.desktop}{
        font-size: 1.2rem;
        margin-top: 7px;
        height: 100vh;
     }
    }

  .trabalhe-conosco{
    display:flex;
    height: 100vh;
    width: 100%;
  }

  .trabalhe-photo{
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      height: auto;
      width: 65%;
    }


  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 70%;

  button {
    height: 30px;
    width: 120px;
    margin-top: 5px;
    background: #A0A0A0;
    border-radius: 5px;
    border: none;

    > p {
      font-size: 0.6rem;
      color: #ffffff;
    }
  }
`;

