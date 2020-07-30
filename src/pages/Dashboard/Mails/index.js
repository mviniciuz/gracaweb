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
      if (!response.data.length) {
        if (page > 1) {
          setPage(page - 1);
        }
      }
      setMails(response.data);
    }
    loadReg();
  }, [page, arg]);

  async function showRegister(data) {
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
        <h1> Envios de e-mails</h1>

        <button type="button" onClick={() => newRegister()}>
          <MdAdd size={40} color="#3ba779" />
        </button>
      </Painel>
      <Content>
        <Table>
          <thead>
            <tr>
              <th className="tam1">Edição</th>
              <th className="tam3">Título</th>
              <th className="tam2">Autor</th>
              <th className="tam1">Data</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {mails.map((item) => (
              <tr>
                <td className="tam1">
                  <strong>{item.news.edition}</strong>
                </td>

                <td className="tam3">
                  <strong>{item.news.title}</strong>
                </td>

                <td className="tam2">
                  <strong>{item.news.author}</strong>
                </td>

                <td className="tam1">
                  <strong>
                    {format(parseISO(item.mail.createdAt), "d'/'MM'/'yyyy", {
                      locale: pt,
                    })}
                  </strong>
                </td>

                <td>
                  <button type="button" onClick={() => { }}>
                    <MdOpenInNew size={15} color="#3ba779" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      {show && <FormMail tag={mail} setShow={setShow} setMails={setMails} />}

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

export default Mails;
