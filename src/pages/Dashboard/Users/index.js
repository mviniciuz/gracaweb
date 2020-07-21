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

    console.tron.log(arg);
    async function loadReg() {
      const response = await api.get('/users', { params: { page, arg } });
      setUsers(response.data);
    }
    loadReg();
  }, [page, arg]);

  async function deleteRegister(id) {
    await api.delete(`/users/${id}`);
    const response = await api.get('/users');
    setUsers(response.data);
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
          <MdAdd size={40} color="#007641" />
        </button>
      </Painel>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Admin</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr>
                <td>
                  <strong>{item.document}</strong>
                </td>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td>
                  <strong>{item.email}</strong>
                </td>
                <td>
                  <strong>{item.admin ? 'Sim' : 'Não'}</strong>
                </td>
                <td>
                  <button type="button" onClick={() => editRegister(item)}>
                    <MdEdit size={15} color="#333" />
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteRegister(item._id)}
                  >
                    <MdDelete size={15} color="#333" />
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

export default Users;
