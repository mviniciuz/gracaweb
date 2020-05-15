import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`;

export const MenuItems = styled.div`
  display: flex;
  background: #FFD8CB;

  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 50px;
  padding-left: 20px;

  border: 0.5px solid #AD7256;
  strong {
    color:#AD7256;

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


