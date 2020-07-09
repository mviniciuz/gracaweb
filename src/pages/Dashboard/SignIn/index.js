import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../../store/modules/auth/actions';

import logo from '../../../assets/logoini.svg';

const schema = Yup.object().shape({
  document: Yup.string()
    .required('Cnpj ou cpf obrigatórios'),
  password: Yup.string()
    .required('A senha é obrigatória')
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ document, password }) {
    dispatch(signInRequest(document, password));
  }

  return (
    <>
      <img src={logo} alt="graca" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="document" type="text" placeholder="Digite seu CNPJ ou CPF" />
        <Input name="password" type="password" placeholder="Digite sua Senha" />
        <button type="submit">{loading ? 'Carregando' : 'Acessar'} </button>
      </Form>
    </>
  );
}
