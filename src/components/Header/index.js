import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MdReorder } from 'react-icons/md';
import Logo from '../../assets/logoini.svg';

import NavBar from './NavBar/index';
import SocialBar from '../SocialBar/index';

import {
  Container,
  Content,
  ContentSocial,
  Menu,
  ItemMenu,
  Button,
  ImgMenu,
  Img,
} from './styles';

function Header() {
  const menu = [
    'HOME',
    'QUEM SOMOS',
    'AREAS DE ATUAÇÃO',
    'NOSSOS PRINCÍPIOS',
    'INFORMATIVOS',
    'RESPONSABILIDADE SOCIAL',
    'CONTATO',
  ];

  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Content>
        <ImgMenu src={Logo} alt="logo do escritório" />
        <ContentSocial>
          <Img src={Logo} alt="logo do escritório" />

          <div className="social">
            <SocialBar />
          </div>
        </ContentSocial>

        <Button type="button" onClick={handleVisible}>
          <MdReorder color="#007641" size={35} />
        </Button>

        <Menu>
          <ul>
            {menu.map((item) => (
              <ItemMenu>
                <Link
                  to={
                    item === 'HOME'
                      ? '/'
                      : item === 'QUEM SOMOS'
                        ? '/about'
                        : item === 'CONTATO'
                          ? '/contact'
                          : item === 'NOSSA EQUIPE'
                            ? '/team'
                            : item === 'AREAS DE ATUAÇÃO'
                              ? '/area'
                              : item === 'NOSSOS PRINCÍPIOS'
                                ? '/principle'
                                : item === 'INFORMATIVOS'
                                  ? '/info'
                                  : item === 'RESPONSABILIDADE SOCIAL'
                                    ? '/social'
                                    : item
                  }
                >
                  <strong>{item}</strong>
                </Link>
                <div className="bar-animation" />
              </ItemMenu>
            ))}
          </ul>
        </Menu>

        {visible ? <NavBar itemsMenu={menu} setShow={setVisible} /> : null}
      </Content>
    </Container>
  );
}

export default Header;
