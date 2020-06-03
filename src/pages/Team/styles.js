import styled from 'styled-components';

const media = {
  desktop: '@media(max-width: 900px)'
}

export const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 15%;
  margin-right: 15%;

  ${media.desktop} {
    margin-left: 5%;
    margin-right: 5%;
  }

  .socios-fundadores {
    height: 80vh;
    width: 100%;

    ${media.desktop} {
      height: 100vh;
      width: 100%;
    }
  }

  .socios{
    height: 50vh;
    width: 100%;

    ${media.desktop} {
      height: 100vh;
      width: 100%;
    }
  }

  .associados{
    height: 50vh;
    width: 100%;

    ${media.desktop} {
      height: 100vh;
      width: 100%;
    }
  }

  h1 {
    padding-top: 20px;
    font-size: 2rem;
    text-align: center;
    color: #4c6158;

    ${media.desktop} {
      font-size: 1.5rem;
    }
  }

  ul {
      display: flex;
      flex:1;
      justify-content: center;
      align-items: flex-start;

      ${media.desktop} {
        flex-direction: column;
        align-items: center;
      }
      height: 90%;

      padding-top: 50px;

      li {
        display: flex;
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          height: auto;
          width: 30%;
        }
        h2 {
          text-align: justify;
          padding: 2vh 2vw ;
          ${media.desktop} {
            padding: 1vh 0vw ;
          }
        }
        p {
          font-size: 0.9rem;
          text-align: justify;
          padding: 0vh 3vw ;

          ${media.desktop} {
            font-size: 0.7rem;
          }
        }
      }
    }


`;
