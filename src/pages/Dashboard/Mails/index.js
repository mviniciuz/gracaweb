import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdAdd, MdFirstPage, MdLastPage, MdOpenInNew } from 'react-icons/md';

import { Container, Painel, Content, Table } from './styles';

import api from '../../../services/api';

import FormMail from './Form/index';

function Mails() {
  const [mails, setMails] = useState([]);
  const [show, setShow] = useState(false);
  const [mail, setMail] = useState({});
  const [page, setPage] = useState(1);
  const [arg, setArg] = useState('');

  useEffect(() => {
    async function loadReg() {
      const response = await api.get('/mail', { params: { page } });
      setMails(response.data);
    }
    loadReg();
  }, []);

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
    async function loadReg() {
      const response = await api.get('/mail', { params: { page, arg } });
      setMails(response.data);
    }
    loadReg();
  }, [page, arg]);

  async function editRegister(data) {
    setMail(data);
    setShow(true);
  }

  async function newRegister() {
    setMail();
    setShow(true);
  }

  async function handleChange(event) {
    setArg(event.target.value);
  }

  return (
    <Container>
      <Painel>
        <h1> E-mails</h1>

        <input
          name="search"
          type="text"
          placeholder=" Digite para pesquisar"
          onChange={handleChange}
          value={arg}
        />
        <button type="button" onClick={() => newRegister()}>
          <MdAdd size={40} color="#007641" />
        </button>
      </Painel>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Edição</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Data</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {mails.map((item) => (
              <tr>
                <strong>{item.news.edition}</strong>
                <strong>{item.news.title}</strong>
                <strong>{item.news.author}</strong>
                <strong>
                  {format(parseISO(item.mail.createdAt), "d'/'MM'/'yyyy", {
                    locale: pt,
                  })}
                </strong>

                <button type="button" onClick={() => editRegister(item)}>
                  <MdOpenInNew size={15} color="#333" />
                </button>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      {show && <FormMail tag={mail} setShow={setShow} setMails={setMails} />}

      <div className="page">
        <button type="button" onClick={() => setPage(page - 1)}>
          <MdFirstPage size={30} color="#525252" />
        </button>
        <p>{page}</p>
        <button type="button" onClick={() => setPage(page + 1)}>
          <MdLastPage size={30} color="#525252" />
        </button>
      </div>
    </Container>
  );
}

export default Mails;
