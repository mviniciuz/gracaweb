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
    height: 80vh;
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
        width: 75% ;
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
        margin-bottom: 15px;

        p {
          font-size: 0.8rem;
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
      justify-content: center;
      align-items: center;

      ${media.desktop} {
        justify-content: center;
      }

      img {
        width: 40% ;
        height: auto;
      }
    }

  }

  .final {
    height: 30px;
    background-color: #568A74;
  }
`;
