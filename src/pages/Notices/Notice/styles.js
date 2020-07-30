import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  z-index: 999;
  width: 68%;
  height: 100%;
  background: #ffffff;

  padding: 5px 10%;

  h2 {
    font-size: 1.4rem;
    color: #568a74;
    font-weight: bold;

    margin-top: 25px;
    margin-bottom: 25px;
    align-self: flex-start;
  }

  strong {
    font-size: 0.9rem;
    color: #a0a0a0;
    font-weight: bold;
    align-self: flex-end;
    margin-bottom: 1px;
  }

  p {
    margin-bottom: 25px;
    color: #7c7c7c;
  }

  button {
    font-size: 0.9rem;
    color: #568a74;
    align-self: flex-start;
  }
`;
