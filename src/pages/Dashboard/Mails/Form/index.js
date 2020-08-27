import React, { useState, useEffect } from 'react';
import { Form, Choice, Select } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

import api from '../../../../services/api';

function FormMail({ mail, setShow, setMails }) {
  const [news, setNews] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function loadReg() {
      const response = await api.get('/news', {
        params: { limits: 6, type: 'IE' },
      });
      const newArray = response.data.map((item) => ({
        id: item._id,
        title: `    ${item.edition} - ${item.title} - ${item.author}       `,
      }));

      setNews(newArray);
    }
    loadReg();
  }, []);

  useEffect(() => {
    async function loadTags() {
      const response = await api.get('/tag');

      response.data.map((item) => {
        setTags((prevTag) => [
          ...prevTag,
          {
            value: item.tag,
            label: item.tag,
          },
        ]);
      });
    }
    loadTags();
  }, []);

  async function handleSubimit(data) {
    console.tron.log(data);
    try {
      await api.post('/mail', data, { params: { rota: 'lote' } });

      const response = await api.get('/mail');
      setMails(response.data);
    } catch (err) {
      console.tron.log(err.response);
      toast.error(`${err.response.data.erro}`);
      return;
    }

    setShow(false);
  }

  return (
    <Container>
      <div className="content">
        <h1>Enviar e-mail</h1>
        <br />
        <Form onSubmit={handleSubimit}>
          <Select
            name="newsId"
            placeholder=" Selecione um Documento"
            options={news}
          />

          <h2>Segmentação (padrão/todos)</h2>
          <div className="tags">
            <Choice name="tags" options={tags} multiple />
          </div>
          <br />

          <button className="button-gravar" type="submit">
            <p>ENVIAR E-MAILS</p>
          </button>

          <button
            className="button-cancelar"
            type="button"
            onClick={() => setShow(false)}
          >
            <p>CANCELAR</p>
          </button>
        </Form>
      </div>
    </Container>
  );
}

export default FormMail;
