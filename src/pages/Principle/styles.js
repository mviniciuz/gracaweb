import styled from 'styled-components';

const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`
  display: flex;
  flex:1;
  ${media.desktop}{
    height:140%;
  }


  .content {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 90vh;
    width: 100%;

    > h1 {
      font-size: 2rem;
      margin-top: 70px;
      position: absolute;
      color: #ffffff;
      ${media.desktop}{
        font-size: 1.3rem;
        margin-top: 35px;
        height: 100vh;
     }
    }
  }

  .box {
      position: absolute;
      top: 55vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 30vh;
      width: 80%;

      ${media.desktop}{
        top: 50vh;
        height: 100vh;
        flex-direction: column;
      }
    }

    .box-item{
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 35vh;
      width: 30%;
      background: #F6F6F6;

      ${media.desktop}{
        height: 30vh;
        width:90%;
      }

      h1 {
        font-size: 1.7rem;
        color: #525252
      }

      p {
        padding-top: 20px;
        font-size: 1rem;
        text-align: center;
        color: #525252;

      ${media.desktop}{
        font-size: 0.9rem;
       }
      }
    }

  img {
    width: 100%;
    height: auto;
  }

`;
