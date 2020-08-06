import styled from 'styled-components';

import imgBack from '../../assets/boxmail/background.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 200px;
  width: 100%;
  background: url(${imgBack});

  p {
    color: #ffffff;
    font-size: 1.8rem;
  }

  input {
    height: 40px;
    width: 25vw;
    font-size: 0.8rem;
    border: none;
    margin: 5px 5px;
    padding-left: 10px;

    border-radius: 5px;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100px;
    background: #a0a0a0;
    margin: 0px 5px;

    border-radius: 5px;
    border: none;

    p {
      font-size: 1rem;
    }
  }
`;
