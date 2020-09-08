import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Choice } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

import api from '../../../../services/api';

const schema = Yup.object().shape({
  name: Yup.string(),
  mail: Yup.string().required('Informe o E-mail'),
  phone: Yup.string(),
  status: Yup.boolean(),
  tags: Yup.array(),
});

function FormContact({ contact, setShow, setContacts }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function loadTags() {
      const response = await api.get('/tag');

      response.data.map((item) => {
        return setTags((prevTag) => [
          ...prevTag,
          { value: item.tag, label: item.tag },
        ]);
      });
    }
    loadTags();
  }, []);

  async function handleSubimit(data) {
    if (!contact) {
      try {
        data = {
          ...data,
          status: true,
        };
        await api.post('/contact', data);

        const response = await api.get('/contact');
        setContacts(response.data);
      } catch (err) {
        toast.error(`${err.response.data.erro}`);
        return;
      }
    }
    if (contact) {
      try {
        await api.put(`/contact/${contact._id}`, data);
        const response = await api.get('/contact');
        setContacts(response.data);
      } catch (err) {
        toast.error(`${err.response.data.erro}`);
        return;
      }
    }
    setShow(false);
  }

  return (
    <Container>
      <div className="content">
        <h1>Contato</h1>
        <br />
        <Form schema={schema} initialData={contact} onSubmit={handleSubimit}>
          <Input name="name" type="text" placeholder="  Nome" />
          <Input name="mail" type="text" placeholder="* E-mail" />
          <Input name="phone" type="text" placeholder=" Telefone" />
          {contact && (
            <Select
              name="status"
              placeholder=" Selecione o status"
              options={[
                { id: true, title: 'Ativo' },
                { id: false, title: 'Inativo' },
              ]}
            />
          )}

          <br />
          <br />
          <h2>Segmentação (padrão/todos)</h2>
          <div className="tags">
            <Choice name="tags" options={tags} multiple />
          </div>
          <br />

          <button className="button-gravar" type="submit">
            <p>GRAVAR</p>
          </button>

          <button
            className="button-cancelar"
            type="button"
            onClick={() => setShow(false)}
            placeholder=" Selecione o status"
          >
            {' '}
            <p>CANCELAR</p>
          </button>
        </Form>
      </div>
    </Container>
  );
}

export default FormContact;
