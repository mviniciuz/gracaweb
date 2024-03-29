import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px 20%;

  .content {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  text-area {
    color: red;
  }

  .container-editor {
    min-height: 150px;
    border: 2px solid #f2f2f2;
    border-radius: 2px;
  }
`;
