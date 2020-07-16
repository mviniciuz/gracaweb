import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 30px 40px;

  h1 {
    color: #007641;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 15px;
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
    }
  }
`;

export const Painel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-right: 0px;

  height: 50px;
  width: 100%;

  input {
    background: #f2f2f2;
    border: 0;
    border-radius: 4px;
    height: 25px;
    width: 300px;
    padding: 0 15px;
    color: #525252;
    margin: 0 0 10px;
    font-size: 0.8rem;

    &::placeholder {
      color: #525252;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
`;

export const Table = styled.table`
  width: 100%;
  padding: 20px 20px;

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }

  thead th {
    color: #525252;
    text-align: left;
    padding-left: 12px;
    font-size: 0.7rem;
    padding-bottom: 15px;
  }

  tbody td {
    padding: 10px;
    font-size: 0.75rem;
  }

  strong {
    color: #525252;
    display: block;
    text-align: left;
    min-width: 10vw;
  }

  button {
    background: none;
    padding: 6px;
    border: 0;
  }
`;
