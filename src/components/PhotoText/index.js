import React, { useEffect } from 'react';

import { Container, Content } from './styles';

function PhotoText({ photo, text, ordemphototexto }) {



  return (
    <Container>
      <Content firstPhoto={ordemphototexto}>
        <div className="photo">
          <p>photo</p>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </Content>
    </Container>
  );
}

export default PhotoText;
