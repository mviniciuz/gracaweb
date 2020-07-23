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
    color: #3ba779;
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
      color: #3ba779;
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

  button {
    background: none;
    padding: 6px;
    border: 0;
  }

  input {
    background: #f2f2f2;
    border: 0;
    border-radius: 4px;
    height: 25px;
    width: 300px;
    padding: 0 15px;
    color: #7c7a7a;
    margin: 0 0 10px;
    font-size: 0.8rem;

    &::placeholder {
      color: #7c7a7a;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
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
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  thead th {
    color: #aaaaaa;
    text-align: left;
    font-size: 0.7rem;
    padding-bottom: 15px;
  }

  tbody td {
    font-size: 0.75rem;
  }

  strong {
    color: #7c7a7a;
  }

  button {
    background: none;
    padding: 6px;
    border: 0;
  }

  .tam1 {
    flex: 1;
  }
  .tam2 {
    flex: 2;
  }
  .tam3 {
    flex: 6;
  }
`;
