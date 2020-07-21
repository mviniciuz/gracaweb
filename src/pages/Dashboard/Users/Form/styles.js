import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 92vh;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px 20%;

  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;