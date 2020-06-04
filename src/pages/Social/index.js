import React from 'react';

import PhotoText from '../../components/PhotoText';

import social01 from '../../assets/social/social01.png';
import social02 from '../../assets/social/social02.png'

import { Container } from './styles';

function Social() {

  const text01 = {
    p1: "O Instituto Fundação Manoel da Graça iniciou suas atividades institucionalmente em 02 de março de 2002 e no " +
      "dia 12 de Janeiro de 200S, foi instituído como uma Organização Social Civil de Interesse Público (OSCIP),  " +
      "buscando focalizar melhores condições em educação, cultura, arte e saúde.",

    p2: "O idealismo e a determinação do Instituto Fundação Manoel da Graça, ao longo desses anos, resultaram na " +
      "implementação de inúmeros projetas que contribuíram para alterar a realidade social, buscando o bem comum da " +
      "parcela mais carente da sociedade, sobretudo no que se refere à Educação, Cultura, lazer, Arte, Assistência " +
      "Social, Saúde, Esporte e Integração Social."
  }

  const text02 = {
    p1: "É uma sociedade civil sem fins lucrativos que busca prestar asse-ssoria e consultoria às pessoas físicas" +
      " e jurídicas.",

    p2: "Objetivos",

    p3: "– integrar a sociedade civil, empresas, instituições públicas e universidades; " +
      "– Agregar estudiosos e profissionais de Relações Internacionais, Direito e Comércio Exterior; " +
      "– Desenvolver um centro de referência nestas áreas; " +
      "– Acompanhar negociações internacionais; " +
      "– Realizar eventos, cursos e seminários sobre os temas de pesquisa; " +
      "– Promover capacitação, por meio de treinamentos, inclusive “in company; " +
      "– Assessorar empresas na contratação de profissionais que atuem nas áreas agregadas; " +
      "– Elaboração de projetos de capacitação de acadêmicos e profissionais para o mercado interno e internacional. "
  }
  return (
    <Container>
      <PhotoText
        id="fundacao"
        title="Fundação Graça"
        text={text01}
        photo={social01}
        inverse={false}
        color="##f7f7f7"
        tamHeight="70vh"
      />
      <PhotoText
        title="O Instituto Paranaense de Relações Internacionais – INPRI"
        text={text02}
        photo={social02}
        inverse={false}
        color="#ffffff"
      />

    </Container>
  );
}

export default Social;
