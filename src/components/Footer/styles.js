import styled from 'styled-components';

const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 40vh;
  ${media.desktop} {
    height: 90vh;
  }

  .content {
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
      flex-direction: column;
    }

    background-color: #E1E1E1;
    padding-left: 10%;
    padding-right: 10%;

    .logo {
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 330px;
        height: auto;
      }
    }

    .contato{
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: center;
      align-items: center;

     ${media.desktop}{
        padding-top: 20%;
        padding-left:10%;
     }



      .item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        height: 25%;
        width: 90%;

        min-width: 350px;
        margin-top: 1px;

        p {
          font-size: 1.3em;
          font-weight:bold;
          color: #525252;
          padding-left: 10px;
        }
      }
    }

    .selos {
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      flex:1;

      img {
        width: 200px;
        height: auto;
      }
    }

  }

  .final {
    height: 30px;
    background-color: #568A74;
  }
`;
