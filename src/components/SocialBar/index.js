import React from 'react';

import LogoFundacao from '../../assets/fundacao.svg'

import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai';

import { Container } from './styles';

function SocialBar() {
  return (
    <Container>
      <a href="https://www.instagram.com/gracaadvogados/" target="_blank" >
        <AiOutlineInstagram color="#939393" size={30} />
      </a>
      <a href="https://www.facebook.com/graca.advogados/" target="_blank" >
        <TiSocialFacebook color="#939393" size={30} />
      </a>
      <a href="https://www.linkedin.com/company/gra-a-advogados-associados/about/" target="_blank" >
        <TiSocialLinkedin color="#939393" size={30} />
      </a>
      <a href="/social" target="_parent">
        <img src={LogoFundacao} alt="logo da fundação graça" />
      </a>
    </Container>
  )
}

export default SocialBar;
