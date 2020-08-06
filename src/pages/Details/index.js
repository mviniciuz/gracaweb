/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

function Details() {
  const [reg, setReg] = useState({
    title: '',
    body: '',
    author: '',
    edition: '',
    data: '',
  });
  const { id } = useParams();

  useEffect(() => {
    async function loadReg() {
      const response = await api.get(`/news/${id}`);
      setReg(response.data);
    }
    loadReg();
  }, []);

  console.tron.log(reg);

  return (
    <Container>
      <strong>Edição: {reg.edition} </strong>
      <strong>{reg.data} </strong>

      <h2>{reg.title}</h2>
      <div
        className="informative"
        dangerouslySetInnerHTML={{
          __html: new Buffer(reg.body, 'base64').toString('utf-8'),
        }}
      />
      <strong>{reg.author} </strong>
    </Container>
  );
}

export default Details;
