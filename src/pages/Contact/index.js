import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { MdLocalPhone, MdMailOutline } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import SocialBar from '../../components/SocialBar';

import api from '../../services/api';

import contact01 from '../../assets/contact/contact01.png';
import contact02 from '../../assets/contact/contact02.png';

import { Container, Form } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required(' * O campo e-mail é obrigatório'),
  phone: Yup.string().required(' * O campo telefone é obrigatório'),
  mail: Yup.string()
    .email(' * Insira um e-mail válido')
    .required('O campo e-mail é obrigatório'),
});

function Contact() {
  const formRefContact = useRef(null);
  const formRefWork = useRef(null);

  async function handleSubimitContact(data, { reset }) {
    try {
      formRefContact.current.setErrors({});
      formRefWork.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/mail/contact', {
        from: data.mail,
        to: 'm.viniciuz@hotmail.com',
        name: data.name,
        phone: data.phone,
        message: data.area,
      });

      toast.success('EMAIL ENVIADO COM SUCESSO!');
      reset();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRefContact.current.setErrors(validationErrors);
      }
    }
  }

  async function handleSubimitWork(data, { reset }) {
    try {
      formRefWork.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/mail/work', {
        from: data.mail,
        to: 'm.viniciuz@hotmail.com',
        name: data.name,
        phone: data.phone,
        message: data.area,
      });

      toast.success('EMAIL ENVIADO COM SUCESSO!');
      reset();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRefWork.current.setErrors(validationErrors);
      }
    }
  }
  return (
    <Container>
      <div className="content-fale">
        <h1>FALE CONOSCO</h1>
        <img src={contact01} alt="imagem de contato" />

        <div className="fale-conosco">
          <div className="form-contato">
            <Form ref={formRefContact} onSubmit={handleSubimitContact}>
              <Input name="name" type="text" placeholder="* Nome" />
              <Input name="phone" type="text" placeholder="* Telefone" />
              <Input name="mail" type="email" placeholder="* E-mail" />
              <TextArea
                name="area"
                type="text"
                rows="50"
                cols="50"
                placeholder="Mensagem"
              />
              <button type="submit">
                <p>ENVIAR</p>
              </button>
            </Form>
          </div>
          <div className="contato">
            <div className="item">
              <MdLocalPhone size={25} color="#568A74" />
              <p>(43) 3029-4464</p>
            </div>
            <div className="item">
              <MdMailOutline size={25} color="#568A74" />
              <p>contato@graca.adv.br</p>
            </div>
            <div className="item">
              <FaMapMarkerAlt size={25} color="#568A74" />
              <p>
                Rua Ana Néri, 166- 86050-490 – Londrina-PR <br /> Brasília/DF –
                Curitiba/PR – São Paulo/SP{' '}
              </p>
            </div>
            <div className="item">
              <SocialBar />
            </div>
          </div>
        </div>
      </div>

      <h1>TRABALHE CONOSCO</h1>

      <div className="content-trabalhe">
        <div className="trabalhe-conosco">
          <div className="form-contato">
            <Form ref={formRefWork} onSubmit={handleSubimitWork}>
              <Input name="name" placeholder="* Nome" />
              <Input name="phone" placeholder="* Telefone" />
              <Input name="mail" placeholder="* E-mail" />
              <TextArea
                name="area"
                rows="50"
                cols="50"
                placeholder="Mensagem"
              />
              <button type="submit">
                <p>ENVIAR</p>
              </button>
            </Form>
          </div>
        </div>

        <div className="trabalhe-photo">
          <img src={contact02} />
        </div>
      </div>
    </Container>
  );
}

export default Contact;
