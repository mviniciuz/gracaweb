import React from 'react';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

import SocialBar from '../../components/SocialBar';

import { MdLocalPhone, MdMailOutline } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

import contact01 from '../../assets/contact/contact01.png';
import contact02 from '../../assets/contact/contact02.png';

import { Container, Form } from './styles';

function Contact() {
  function handleSubimit(data) {
    console.log(data);
  }
  return (
    <Container>
      <div className="content-fale">
        <h1>FALE CONOSCO</h1>
        <img src={contact01} alt="imagem de contato" />

        <div className="fale-conosco">
          <div className="form-contato">
            <Form onSubmit={handleSubimit}>
              <Input name="name" placeholder="* Nome" />
              <Input name="phone" placeholder="* Telefone" />
              <Input name="mail" placeholder="* E-mail" />
              <TextArea name="area" rows="50" cols="50" placeholder="Mensagem" />
              <button type="submit"><p>ENVIAR</p></button>
            </Form>
          </div>
          <div className="contato" >
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
              <p>Rua Ana Néri,  166- 86050-490 – Londrina-PR <br /> Brasília/DF – Curitiba/PR – São Paulo/SP </p>
            </div>
            <div className="item">
              <SocialBar />
            </div>
          </div>
        </div>
      </div>
      <div className="content-trabalhe">
        <h1>TRABALHE CONOSCO</h1>
        <div className="trabalhe-conosco">
          <div className="form-contato">
            <Form onSubmit={handleSubimit}>
              <Input name="name" placeholder="* Nome" />
              <Input name="phone" placeholder="* Telefone" />
              <Input name="mail" placeholder="* E-mail" />
              <TextArea name="area" rows="50" cols="50" placeholder="Mensagem" />
              <button type="submit"><p>ENVIAR</p></button>
            </Form>
          </div>
          <div className="trabalhe-photo">
            <img src={contact02} alt="foto trabalhe conosco" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
