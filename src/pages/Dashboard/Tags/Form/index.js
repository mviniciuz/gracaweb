import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

import api from '../../../../services/api';

const schema = Yup.object().shape({
  tag: Yup.string().required('Informar a descrição da Tag'),
});

function FormTag({ tag, setShow, setTags }) {
  async function handleSubimit(data) {
    try {
      if (!tag) {
        await api.post('/tag', data);

        const response = await api.get('/tag');
        setTags(response.data);
      }
      if (tag) {
        console.tron.log(data);
        await api.put(`/tag/${tag._id}`, data);
        const response = await api.get('/tag');
        setTags(response.data);
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
        <Form schema={schema} initialData={tag} onSubmit={handleSubimit}>
          <Input
            name="tag"
            type="text"
            placeholder="* Informe a descrição da Tag"
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

export default FormTag;
