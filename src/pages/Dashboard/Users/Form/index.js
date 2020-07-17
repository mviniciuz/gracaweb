import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

import api from '../../../../services/api';

const schema = Yup.object().shape({
  document: Yup.string().required('Informar o CPF ou Cnpj'),
  name: Yup.string().required('Informe o nome'),
  email: Yup.string()
    .email(' * Insira um e-mail válido')
    .required('O campo e-mail é obrigatório'),
  admin: Yup.boolean(),
  oldPassword: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
});

function FormUser({ user, setShow, setUsers }) {
  async function handleSubimit(data) {
    try {
      if (!user) {
        await api.post('/users', data);

        const response = await api.get('/users');
        setUsers(response.data);
      }
      if (user) {
        await api.put(`/users/${user._id}`, data);
        const response = await api.get('/users');
        setUsers(response.data);

        console.tron.log(response.data);
      }
    } catch (err) {
      console.tron.log(err.response);
      toast.error(`${err.response.data.erro}`);
      return;
    }

    setShow(false);
  }

  return (
    <Container>
      <div className="content">
        <h1>Usuário</h1>
        <br />
        <Form schema={schema} initialData={user} onSubmit={handleSubimit}>
          <Select
            name="admin"
            placeholder="Admin"
            options={[
              { id: 'true', title: 'Sim' },
              { id: 'false', title: 'Não' },
            ]}
          />
          <Input name="document" type="text" placeholder="* CPF ou CNPJ" />
          <Input name="name" type="text" placeholder="* Nome" />
          <Input name="email" type="text" placeholder="* E-mail" />

          {user && (
            <Input
              name="oldPassword"
              type="password"
              placeholder=" Senha Atual"
            />
          )}

          <Input name="password" type="password" placeholder="* Nova senha" />

          {user && (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="*Confirme a senha"
            />
          )}

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

export default FormUser;
