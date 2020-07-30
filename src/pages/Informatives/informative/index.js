import React, { useEffect } from 'react';

import { Container } from './styles';

function Infomarive({ info, setInfo }) {
  return (
    <Container>
      <strong>Edição: {info.edition} </strong>
      <strong>{info.data} </strong>

      <h2>{info.title}</h2>
      <div
        className="informative"
        dangerouslySetInnerHTML={{
          __html: new Buffer(info.body, 'base64').toString('utf-8'),
        }}
      />
      <strong>{info.author} </strong>
      <button type="button" onClick={() => setInfo()}>
        <p> {'< '}Página anterior</p>
      </button>
    </Container>
  );
}

export default Infomarive;
