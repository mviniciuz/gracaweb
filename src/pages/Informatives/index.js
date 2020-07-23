import React, { useState } from 'react';

import { MdFirstPage, MdLastPage } from 'react-icons/md';

import { Container } from './styles';

function Informatives() {
  const [page, setPage] = useState(1);
  return (
    <Container>
      <h1>INFORMATIVOS</h1>
      <div className="grid">
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div>
      <div className="page">
        <button type="button" onClick={() => setPage(page - 1)}>
          <MdFirstPage size={30} color="#3ba779" />
        </button>
        <p>{page}</p>
        <button type="button" onClick={() => setPage(page + 1)}>
          <MdLastPage size={30} color="#3ba779" />
        </button>
      </div>
    </Container>
  );
}

export default Informatives;
