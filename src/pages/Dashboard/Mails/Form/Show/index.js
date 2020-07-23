import React from 'react';

import { Container } from './styles';

function Show({ data }) {
  return (
    <Container>
      <p>{data.title}</p>
    </Container>
  );
}

export default Show;
