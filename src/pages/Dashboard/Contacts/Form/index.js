import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

import api from '../../../../services/api';

const schema = Yup.object().shape({
  name: Yup.string(),
  mail: Yup.string().required('Informe o E-mail'),
  phone: Yup.string(),
  status: Yup.boolean(),
});

function FormContact({ contact, setShow, setContacts }) {
  async function handleSubimit(data) {
    try {
      if (!contact) {
        await api.post('/contact', data);

        const response = await api.get('/contact');
        setContacts(response.data);
      }
      if (contact) {
        console.tron.log(data);
        await api.put(`/contact/${contact._id}`, data);
        const response = await api.get('/contact');
        setContacts(response.data);
      }
    } catch (err) {
      toast.error(`${err.response.data.erro}`);
      return;
    }

    setShow(false);
  }

  return (
    <Container>
      <div className="content">
        <h1>Contato</h1>
        <br />
        <Form schema={schema} initialData={contact} onSubmit={handleSubimit}>
          <Input name="name" type="text" placeholder="* Informe o nome" />
          <Input name="mail" type="text" placeholder="* Informe o e-mail" />
          <Select
            name="status"
            placeholder=" Selecione o status"
            options={[
              { id: 'true', title: 'Ativo' },
              { id: 'false', title: 'Inativo' },
            ]}
          />

          <button className="button-gravar" type="submit">
            <p>GRAVAR</p>
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

export default FormContact;
