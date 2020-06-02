import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: absolute;
  top: 113px;
  right: 0px;

  width: 60%;
  height: 100vh;
`;

export const MenuItems = styled.div`
  display: flex;
  background: #e7e7e7;

  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 50px;
  padding-left: 20px;

  border: 0.5px solid #f2f2f2;

  strong {
    color:#646464;
    font-size: 0.7rem;

    &:hover {
      position: relative;
      transition: $animate;
      transition-duration: 0.2s;
      opacity: 0.4;
    }
  }

  button {
    background: transparent;
    border: none;
  }


`;


