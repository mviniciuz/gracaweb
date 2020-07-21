import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logoini.svg';

import { Container } from './styles';

function SideMenu() {
  return (
    <Container>
      <img src={Logo} />
      <br />
      <br />

      <Link to="/news">
        <button type="submit">
          <strong>Informativos</strong>
        </button>
      </Link>
      <Link to="/mail">
        <button type="submit">
          <strong>E-mails</strong>
        </button>
      </Link>

      <br />
      <br />

      <Link to="/contacts">
        <button type="submit">
          <strong>Contatos</strong>
        </button>
      </Link>
      <Link to="/tags">
        <button type="submit">
          <strong>Seguimentos</strong>
        </button>
      </Link>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/users">
        <button type="submit">
          <strong>Usuários</strong>
        </button>
      </Link>
      <Link to="/">
        <button type="submit">
          <strong>Configurações</strong>
        </button>
      </Link>
    </Container>
  );
}

export default SideMenu;
