import React, { useState } from 'react';

import SliderHome from '../../components/SliderHome';

import PhotoText from '../../components/PhotoText';

import home01 from '../../assets/home/home01.png';

import { Container, Content } from './styles';

export default function Home() {

  const text = {
    p1: "O Graça Advogados é um escritório especializado na advocacia empresarial," +
      "com excelência reconhecida em todo o território brasileiro." +
      "Fundado em 2001, tem como objetivo a consolidação de uma" +
      "advocacia  inovadora, voltada para uma orientação jurídica" +
      "preventiva e ao planejamento de estratégias legais que visam" +
      "proporcionar segurança e economia a seus clientes.",

    p2: "O escritório também possui renomada experiência na área contenciosa, atuando em litígios" +
      "de elevado vulto e comple-xidade, perante todas as instâncias do Poder Judiciário" +
      "e da Administração Pública municipal estadual e federal, tendo por princípio" +
      "a busca incansável por resultados jurídicos sólidos, rápidos e inovadores."
  }

  return (
    <Container>
      <SliderHome />
      <PhotoText
        title="Quem somos"
        text={text}
        photo={home01}
        inverse={true}
      />
    </Container>
  );
}
