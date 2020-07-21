import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

import api from '../../../../services/api';

const schema = Yup.object().shape({
  tag: Yup.string().required('Informar a descrição da Tag'),
});

function FormMail({ mail, setShow, setMails }) {
  async function handleSubimit(data) {
    try {
      if (!mail) {
        await api.post('/mail', data);

        const response = await api.get('/mail');
        setMails(response.data);
      }
      if (mail) {
        console.tron.log(data);
        await api.put(`/tag/${mail._id}`, data);
        const response = await api.get('/mail');
        setMails(response.data);
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
        <h1>Tag</h1>
        <br />
        <Form schema={schema} initialData={mail} onSubmit={handleSubimit}>
          <Input name="tag" type="text" placeholder="* Descrição da Tag" />

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

export default FormMail;
