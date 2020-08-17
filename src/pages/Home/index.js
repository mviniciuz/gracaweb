import React, { useState } from 'react';

import Slider from '../../components/Slider';

import PhotoText from '../../components/PhotoText';
import PhotoTitle from '../../components/PhototTitle';

import home01 from '../../assets/home/home01.png';
import home02 from '../../assets/home/home02.png';

import Informatives from '../Informatives';

import { Container } from './styles';

export default function Home() {
  const text = {
    p1:
      'O Graça Advogados é um escritório especializado na advocacia empresarial, ' +
      'com excelência reconhecida em todo o território brasileiro. ' +
      'Fundado em 2001, tem como objetivo a consolidação de uma ' +
      'advocacia  inovadora, voltada para uma orientação jurídica ' +
      'preventiva e ao planejamento de estratégias legais que visam ' +
      'proporcionar segurança e economia a seus clientes.',

    p2:
      'O escritório também possui renomada experiência na área contenciosa, atuando em litígios ' +
      'de elevado vulto e comple-xidade, perante todas as instâncias do Poder Judiciário ' +
      'e da Administração Pública municipal estadual e federal, tendo por princípio ' +
      'a busca incansável por resultados jurídicos sólidos, rápidos e inovadores.',
  };

  const titles = {
    p1: 'DIREITO ADMINISTRATIVO',
    p2: 'DIREITO CÍVEL',
    p3: 'DIREITO DIGITAL',
    p4: 'DIREITO ELEITORAL',
    p5: 'DIREITO EMPRESARIAL',
    p6: 'DIREITO PENAL',
    p7: 'DIREITO TRABALHISTA',
    p8: 'DIREITO TRIBUTÁRIO',
    p9: 'MEDIAÇÃO E ARBITRAGEM',
  };

  return (
    <Container>
      <Slider />
      <PhotoText
        title="Quem somos"
        text={text}
        photo={home01}
        inverse={false}
        color="#ffffff"
      />

      <PhotoTitle
        title="Áreas de atuação"
        text={titles}
        photo={home02}
        inverse
        color="#f7f7f7"
      />
      <Informatives />
    </Container>
  );
}

// <FadeIn01>Seriedade</FadeIn01>
// <FadeIn02>Compromisso</FadeIn02>
// <FadeIn03>Resultados</FadeIn03>
