import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logoini.svg'
import LogoFundacao from '../../assets/fundacao.svg'

import NavBar from './NavBar/index';

import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai';
import { MdReorder } from 'react-icons/md';

import { Container, Content, ContentSocial, SocialBar, Menu, ItemMenu, Button, ImgMenu, Img } from './styles';

function Header() {
  const menu = ['HOME', 'QUEM SOMOS', 'NOSSA EQUIPE', 'AREAS DE ATUAÇÃO', 'NOSSOS PRINCÍPIOS', 'NOTÍCIAS', 'REPONSABILIDADE', 'CONTATO'];

  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Content>
        <ContentSocial>
          <Img src={Logo} alt="logo do escritório" />
          <SocialBar>
            <a href="https://www.instagram.com/esteticapatriciabrasil/" target="_blank" >
              <AiOutlineInstagram color="#939393" size={28} />
            </a>
            <a href="https://www.facebook.com/esteticapatriciabrasil/" target="_blank" >
              <TiSocialFacebook color="#939393" size={28} />
            </a>
            <a href="https://www.facebook.com/esteticapatriciabrasil/" target="_blank" >
              <TiSocialLinkedin color="#939393" size={28} />
            </a>
            <a href="https://www.facebook.com/esteticapatriciabrasil/" target="_blank" >
              <img src={LogoFundacao} alt="logo da fundação graça" />
            </a>
          </SocialBar>
        </ContentSocial>

        <Button type="button" onClick={handleVisible}>
          <MdReorder color="#AD7256" size={35} />
        </Button>

        <Menu>
          <ul>
            {menu.map(item => (
              <ItemMenu>
                <Link to={item === 'Home' ? "/" : item}>
                  <strong>{item}</strong>
                </Link>
                <div class="bar-animation"></div>
              </ItemMenu>
            ))
            }
          </ul >
        </Menu >
        <ImgMenu src={Logo} alt="logo do escritório" />
      </Content >
      {visible ? <NavBar itemsMenu={menu} setShow={setVisible} /> : null}
    </Container >
  );
}

export default Header;
