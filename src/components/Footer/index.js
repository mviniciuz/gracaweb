import React from 'react';

import Logo from '../../assets/footer/logo.png';
import selos from '../../assets/footer/selos.png';

import { MdLocalPhone, MdMailOutline } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <div className="content">
        <div className="logo" >
          <img src={Logo} />
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

        </div>
        <div className="selos" >
          <img src={selos} />
        </div>
      </div>
      <div className="final" />
    </Container>);
}

export default Footer;
