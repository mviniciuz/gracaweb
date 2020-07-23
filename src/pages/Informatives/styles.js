import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 40px;
  padding-botton: 20px;

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
    grid-gap: 10px;
  }

  .item {
    border: 1px solid #525252;
  }

  button {
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
