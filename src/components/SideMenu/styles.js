import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  width: 20%;

  background: rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 20px;

  button {
    width: 170px;
    height: 40px;
    background: rgba(256, 256, 256, 0.97);
    border-radius: 5px;

    margin-top: 10px;
    height: 40px;
    transition: background 0.3s;
    border: none;

    &:hover {
      background: ${darken(0.03, '#f7f7f7')};
    }

    > strong {
      color: #3ba779;
      font-weight: bold;
      font-size: 1rem;
      opacity: 0.7;
    }
  }
`;
