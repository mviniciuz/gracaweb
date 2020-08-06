import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeInLeftAnimated = keyframes`${fadeInLeft} `;

const media = {
  desktop: '@media(max-width: 900px)',
};

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  width: 100%;
`;
