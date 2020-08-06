import React from 'react';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  name: Yup.string(),
  mail: Yup.string()
    .email('Por favor, informar e-mail válido!')
    .required('O campo e-mail é obrigatório!'),
});

function BoxContact() {
  async function handleSubimit(data, { resetForm }) {
    try {
      const response = await api.post('/contact', data);
      toast.success('Contato Cadastrado com Sucesso');

      resetForm();
    } catch (err) {
      toast.error(`${err.response.data.erro}`);
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubimit}>
        <p>Receba Nossos Informativos e Notícias</p>

        <Input name="name" type="text" placeholder="      NOME" />
        <Input name="mail" type="text" placeholder="      E-MAIL" />
        <button className="button" type="submit">
          <p>Cadastrar</p>
        </button>
      </Form>
    </Container>
  );
}

export default BoxContact;
