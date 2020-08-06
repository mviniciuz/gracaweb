import styled from 'styled-components';

import imgRet from '../../assets/info/ret-info.svg';

const media = {
  tablet: '@media(max-width: 1070px)',
  phone: '@media(max-width: 600px)',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 40px;

  h1 {
    font-size: 1.8rem;
    color: #568a74;
    padding-top: 10px;
    padding-bottom: 30px;
    text-align: center;
  }

  .grid {
    display: grid;
    width: 60vw;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 40vh 40vh;
    grid-gap: 12px;

    ${media.tablet} {
      grid-template-columns: 1fr 1fr;
    }

    ${media.phone} {
      grid-template-columns: 1fr;
    }
  }

  .item {
    display: flex;
    flex-direction: column;

    .item-header {
      background: url(${imgRet});
      height: 45%;

      .item-header-date {
        height: 45%;
        width: 100%;
        text-align: right;
        padding-top: 5px;
        padding-right: 10px;
        font-size: 0.9rem;
        font-weight: bold;
        color: #838383;

        strong {
          font-size: 1.1rem;
        }
      }

      .item-header-title {
        height: 40%;
        width: 100%;
        background: #3ba779;

        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        color: #ffffff;
        font-size: 0.7rem;
        font-weight: bold;
      }
    }

    .item-body {
      height: 50%;
      color: #838383;
      font-size: 0.7rem;
      font-weight: bold;
      text-align: justify;
      margin: 5px 5px;

      max-height: 26%;
      overflow: hidden;
      text-overflow: initial;
    }

    .ler {
      padding-left: 5px;
      margin-top: 15px;
      color: #4c6158;
      font-size: 0.7rem;
      font-weight: bold;
    }
  }

  button {
    display: flex;
    background: none;
    padding: 6px;
    border: 0;
  }

  .page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      width: 100px;
      color: #3ba779;
    }
  }
`;
