import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  MdDelete,
  MdAdd,
  MdEdit,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import { Container, Painel, Content, Table } from './styles';

import api from '../../../services/api';

import FormNews from './Form/index';

function Users() {
  const [newsList, setNewsList] = useState([]);
  const [show, setShow] = useState(false);
  const [news, setNews] = useState({});
  const [page, setPage] = useState(1);
  const [arg, setArg] = useState('');

  useEffect(() => {
    async function loadReg() {
      const response = await api.get('/news', { params: { page } });
      setNewsList(response.data);
    }
    loadReg();
  }, []);

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
    async function loadReg() {
      const response = await api.get('/news', { params: { page, arg } });
      setNewsList(response.data);
    }
    loadReg();
  }, [page, arg]);

  async function deleteRegister(id) {
    try {
      await api.delete(`/news/${id}`);
      const response = await api.get('/news');
      setNewsList(response.data);
    } catch (err) {
      toast.error(`${err.response.data.erro}`);
    }
  }

  async function editRegister(data) {
    setNews(data);
    setShow(true);
  }

  async function newRegister() {
    setNews();
    setShow(true);
  }

  async function handleChange(event) {
    setArg(event.target.value);
  }

  return (
    <Container>
      <Painel>
        <h1> Informativos</h1>

        <input
          name="search"
          type="text"
          placeholder=" Digite para pesquisar"
          onChange={handleChange}
          value={arg}
        />
        <button type="button" onClick={() => newRegister()}>
          <MdAdd size={40} color="#3ba779" />
        </button>
      </Painel>
      <Content>
        <Table>
          <thead>
            <tr>
              <th className="tam1">Edição</th>
              <th className="tam3">Titulo</th>
              <th className="tam2">Autor</th>
              <th className="tam1">Ativo Site</th>
              <th className="tam1">Tipo</th>
              <th className="tam1">Data</th>
              <th className="tam1" />
            </tr>
          </thead>
          <tbody>
            {newsList.map((item) => (
              <tr>
                <td className="tam1">
                  <strong>{item.edition}</strong>
                </td>
                <td className="tam3">
                  <strong>{item.title}</strong>
                </td>
                <td className="tam2">
                  <strong>{item.author}</strong>
                </td>
                <td className="tam1">
                  <strong>{item.activeSite ? 'Sim' : 'Não'}</strong>
                </td>
                <td className="tam1">
                  <strong>
                    {item.type === 'I' ? 'Informativo' : 'Notícia'}
                  </strong>
                </td>
                <td className="tam1">
                  <strong>
                    {format(parseISO(item.createdAt), "d'/'MM'/'yyyy", {
                      locale: pt,
                    })}
                  </strong>
                </td>
                <td>
                  <button type="button" onClick={() => editRegister(item)}>
                    <MdEdit size={15} color="#3ba779" />
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteRegister(item._id)}
                  >
                    <MdDelete size={15} color="#3ba779" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      {show && (
        <FormNews news={news} setShow={setShow} setNewsList={setNewsList} />
      )}

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

export default Users;
