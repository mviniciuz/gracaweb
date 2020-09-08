import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import {
  MdDelete,
  MdAdd,
  MdEdit,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import { Container, Painel, Content, Table } from './styles';

import api from '../../../services/api';

import FormUser from './Form/index';

function Users() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [page, setPage] = useState(1);
  const [arg, setArg] = useState('');

  useEffect(() => {
    async function loadReg() {
      const response = await api.get('/users', { params: { page } });
      setUsers(response.data);
    }
    loadReg();
  }, []);

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }

    async function loadReg() {
      const response = await api.get('/users', { params: { page, arg } });
      if (!response.data.length) {
        if (page > 1) {
          setPage(page - 1);
        }
      }
      setUsers(response.data);
    }
    loadReg();
  }, [page, arg]);

  async function deleteRegister(id) {
    try {
      await api.delete(`/users/${id}`);
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (err) {
      toast.error(`${err.response.data.erro}`);
    }
  }

  async function editRegister(data) {
    setUser(data);
    setShow(true);
  }

  async function newRegister() {
    setUser();
    setShow(true);
  }

  async function handleChange(event) {
    setArg(event.target.value);
  }

  return (
    <Container>
      <Painel>
        <h1> Usuários</h1>

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
              <th className="tam1">Id</th>
              <th className="tam2">Nome</th>
              <th className="tam2">E-mail</th>
              <th className="tam1">Admin</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr>
                <td className="tam1">
                  <strong>{item.document}</strong>
                </td>
                <td className="tam2">
                  <strong>{item.name}</strong>
                </td>
                <td className="tam2">
                  <strong>{item.email}</strong>
                </td>
                <td className="tam1">
                  <strong>{item.admin ? 'Sim' : 'Não'}</strong>
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
      {show && <FormUser user={user} setShow={setShow} setUsers={setUsers} />}
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
