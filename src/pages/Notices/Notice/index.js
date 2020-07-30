import React, { useEffect } from 'react';

import { Container } from './styles';

function Notice({ notice, setNotice }) {
  return (
    <Container>
      <strong>Edição: {notice.edition} </strong>
      <strong>{notice.data} </strong>

      <h2>{notice.title}</h2>
      <div
        className="informative"
        dangerouslySetInnerHTML={{
          __html: new Buffer(notice.body, 'base64').toString('utf-8'),
        }}
      />
      <strong>{notice.author} </strong>
      <button type="button" onClick={() => setNotice()}>
        <p> {'< '}Página anterior</p>
      </button>
    </Container>
  );
}

export default Notice;
