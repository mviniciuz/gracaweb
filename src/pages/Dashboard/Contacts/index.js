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

import FormContact from './Form/index';

function Contact() {
  const [Contacts, setContacts] = useState([]);
  const [show, setShow] = useState(false);
  const [contact, setContact] = useState({});
  const [page, setPage] = useState(1);
  const [arg, setArg] = useState('');

  useEffect(() => {
    async function loadReg() {
      const response = await api.get('/contact', { params: { page } });
      setContacts(response.data);
    }
    loadReg();
  }, []);

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
    async function loadReg() {
      const response = await api.get('/contact', { params: { page, arg } });
      setContacts(response.data);
    }
    loadReg();
  }, [page, arg]);

  async function deleteRegister(id) {
    await api.delete(`/contact/${id}`);
    const response = await api.get('/contact');
    setContacts(response.data);
  }

  async function editRegister(data) {
    setContact(data);
    setShow(true);
  }

  async function newRegister() {
    setContact();
    setShow(true);
  }

  async function handleChange(event) {
    setArg(event.target.value);
  }

  return (
    <Container>
      <Painel>
        <h1> Cadastro de Contatos</h1>

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
              <th>e-mail</th>
              <th>nome</th>
              <th>fone</th>
              <th>status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {Contacts.map((item) => (
              <tr>
                <td>
                  <strong>{item.mail}</strong>
                </td>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td>
                  <strong>{item.phone}</strong>
                </td>
                <td>
                  <strong>{item.status ? 'Ativo' : 'Inativo'}</strong>
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
      {show && (
        <FormContact
          contact={contact}
          setShow={setShow}
          setContacts={setContacts}
        />
      )}

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

export default Contact;
