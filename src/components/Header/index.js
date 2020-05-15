import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logocolor.svg'

import NavBar from './NavBar/index';

import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdReorder } from 'react-icons/md';

import { Container, Bar01, SocialBar, Bar02, Menu, ItemMenu, ConatactBar, Button, ImgMenu } from './styles';

function Header() {
  const menu = ['Home', 'Sobre', 'Tratamentos', 'logo', 'Resultados', 'Equipe', 'Contatos'];

  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Bar01>
        <ConatactBar>
          <strong>Ligar</strong><a href="tel:43999179080">(43) 99917-9080</a>
        </ConatactBar>
        <SocialBar>
          <a href="https://linktr.ee/esteticapatriciabrasil" target="_blank" >
            <AiOutlineWhatsApp color="#AD7256" size={23} />
          </a>
          <a href="https://www.instagram.com/esteticapatriciabrasil/" target="_blank" >
            <TiSocialInstagram color="#AD7256" size={23} />
          </a>
          <a href="https://www.facebook.com/esteticapatriciabrasil/" target="_blank" >
            <TiSocialFacebook color="#AD7256" size={23} />
          </a>
        </SocialBar>
      </Bar01>
      <Bar02>
        <Button type="button" onClick={handleVisible}>
          <MdReorder color="#AD7256" size={35} />
        </Button>
        <Menu>
          <ul>
            {menu.map(item => (
              item !== 'logo' ?
                <ItemMenu>
                  <Link to={item === 'Home' ? "/" : item}>
                    <strong>{item}</strong>
                  </Link>
                  <div class="bar-animation"></div>
                </ItemMenu>
                : <img src={Logo} alt="logo da patricia" />
            ))}
          </ul>
        </Menu>
        <ImgMenu src={Logo} alt="logo da patricia" />
      </Bar02>
      {visible ? <NavBar itemsMenu={menu} setShow={setVisible} /> : null}
    </Container >
  );
}

export default Header;
