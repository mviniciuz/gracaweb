import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(-225deg, #ffffff, #99e1c3);
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input,
    select {
      background: #f2f2f2;
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #525252;
      margin: 0 0 10px;
      font-size: 0.8rem;
      &::placeholder {
        color: #525252;
      }
    }

    .button-gravar {
      margin: 1px 0 0;
      height: 44px;
      background: #2ceaa3;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      border-color: #ffffff;
      font-size: 0.8rem;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, '#6bffb8')};
      }
    }

    .button-cancelar {
      margin: 1px 0 0;
      height: 44px;
      background: #d37474;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      border-color: #ffffff;
      font-size: 0.8rem;
      transition: background 0.3s;
      margin-top: 5px;

      &:hover {
        background: ${darken(0.03, '#D37474')};
      }
    }
  }
`;
