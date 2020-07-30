import React, { useState, useEffect } from 'react';

import {
  MdDelete,
  MdAdd,
  MdEdit,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import { Container, Painel, Content, Table } from './styles';

import api from '../../../services/api';

import FormTag from './Form/index';

function Users() {
  const [tags, setTags] = useState([]);
  const [show, setShow] = useState(false);
  const [tag, setTag] = useState({});
  const [page, setPage] = useState(1);
  const [arg, setArg] = useState('');

  useEffect(() => {
    async function loadReg() {
      const response = await api.get('/tag', { params: { page } });
      setTags(response.data);
    }
    loadReg();
  }, []);

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
    async function loadReg() {
      const response = await api.get('/tag', { params: { page, arg } });
      if (!response.data.length) {
        if (page > 1) {
          setPage(page - 1);
        }
      }
      setTags(response.data);
    }
    loadReg();
  }, [page, arg]);

  async function deleteRegister(id) {
    await api.delete(`/tag/${id}`);
    const response = await api.get('/tag');
    setTags(response.data);
  }

  async function editRegister(data) {
    setTag(data);
    setShow(true);
  }

  async function newRegister() {
    setTag();
    setShow(true);
  }

  async function handleChange(event) {
    setArg(event.target.value);
  }

  return (
    <Container>
      <Painel>
        <h1> Seguimentos</h1>

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
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {tags.map((item) => (
              <tr>
                <td>
                  <strong>{item.tag}</strong>
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
      {show && <FormTag tag={tag} setShow={setShow} setTags={setTags} />}

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
