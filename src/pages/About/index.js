import React from 'react';

import Slider from 'react-slick';

import PhotoText from '../../components/PhotoText';

import topimage from '../../assets/about/sobre.png';
import sobre01 from '../../assets/about/sobre01.png';
import sobre02 from '../../assets/about/sobre02.png';
import sobre03 from '../../assets/about/selos.png';
import sobre04 from '../../assets/about/sobre03.png';

import escritorio01 from '../../assets/about/escritorio01.png';
import escritorio02 from '../../assets/about/escritorio02.png';
import escritorio03 from '../../assets/about/escritorio03.png';
import escritorio04 from '../../assets/about/escritorio04.png';
import escritorio05 from '../../assets/about/escritorio05.png';
import escritorio06 from '../../assets/about/escritorio06.png';
import escritorio07 from '../../assets/about/escritorio07.png';
import escritorio08 from '../../assets/about/escritorio08.png';

import { Container } from './styles';

function About() {
  const text01 = {
    p1:
      'O Graça Advogados é um escritório especializado na advocacia empresarial, com ' +
      'excelência reconhecida em todo o território brasileiro. Fundado em 2001, tem ' +
      'como objetivo a consolidação de uma advocacia inovadora, voltada para uma ' +
      'orientação jurídica preventiva e ao planejamento de estratégias legais que visam ' +
      'proporcionar segurança e economia a seus clientes. ',

    p2:
      'O escritório também possui renomada experiência na área contenciosa, atuando ' +
      'em litígios de elevado vulto e complexidade, perante todas as instâncias do ' +
      'Poder  Judiciário  e da Administração Pública municipal estadual e federal, tendo ' +
      'por princípio a busca incansável por resultados jurídicos sólidos, rápidos e ' +
      'inovadores',
  };

  const text02 = {
    p1:
      'representa um grupo bastante diversificado de clientes, entre ' +
      'empresas brasileiras e multinacionais, sindicatos e cooperativas, nos diversos ' +
      'segmentos de indústria, comércio e prestação de serviços, com destaque para os ramos ' +
      'de alimentos, têxteis, movelaria, construção, civil, esportes, telecomunicações, ' +
      'entretenimento, supermercados, contact-centers, entre  muitos outros.',

    p2:
      'Em sintonia com as demandas contemporâneas, o Graça Advogados possui ' +
      'unidades completas nas cidades paranaenses de Curitiba e Londrina, assim ' +
      'como em  São Paulo e Brasília, além de uma vasta rede de correspondentes em ' +
      'todo o país, todos aptos a dar imediato suporte às tarefas desenvolvidas pelos ' +
      'profissionais do escritório, assegurando a seus clientes um atendimento sofisticado, ágil e eficiente.',

    p3:
      'O Graça Advogados se pauta no absoluto compromisso com princípios éticos e ' +
      'prima pelo estreitamento das relações humanas, estimulando o contato direto e ' +
      'personalizado de seus profissionais com clientes e parceiros, em um intenso e ' +
      'constante processo de busca pela excelência e satisfação de suas necessidades.',
  };

  const text03 = {
    p1:
      'O Graça Advogados Associados foi eleito um dos escritórios de advocacia mais admirados do Brasil, conforme o anuário Análise Advocacia 500 - 13ª edição 2018. Foram realizadas 1.064 entrevistas com os executivos das maiores companhias do país. ',
    p2:
      'Incluído neste seleto grupo, através das indicações recebidas na categoria de bancas abrangentes, o Graça Advogados Associados ocupa a 4ª posição no Estado Paraná. ',
    p3:
      'Em 2019, o Graça Advogados Associados entrou no ranking do Anuário Análise Advocacia 500 – 14ª edição 2019, como o 2º escritório mais admirado do Paraná, o 5º mais admirado na especialidade Consumidor, o 4º na especialidade Contratos empresariais, o 4º na especialidade Trabalhista e o 2º no setor econômico do comércio.',
    p4:
      'Pela 3ª vez consecutiva, o Graça Advogados Associados foi eleito, em oito categorias, como o escritório mais admirado de 2020 pelo Anuário Análise 500.',
    p5:
      ' 1º Lugar - Escritório mais admirado do Estado do  Paraná, 2º Lugar - Setor econômico / Comércio, 3º Lugar - Especialidade / Tributário, 3º Lugar - Especialidade / Consumidor, 5º Lugar - Especialidade / Contratos Empresariais, 4º Lugar - Especialidade / Digital, 4º Lugar - Especialidade / Imobiliário, 4º Lugar - Especialidade / Trabalhista.',
  };

  const text04 = {
    p1:
      'O Graça Advogados Associados dispõe de um espaço físico bastante amplo e localizado na região nobre de Londrina.',
    p2:
      'Temos mais de sete salas exclusivas para advogados, todas climatizadas, com computadores e dois' +
      'monitores, para melhor  produtividade no trabalho e material de escritório completo.',
    p3:
      'Além de outros ambientes, como: Auditório, Sala de Atendimento, Gestão jurídica,' +
      'Gestão Financeira, Marketing  e Comunicação, Centro de  Processamentos de Dados - CPD, Controladoria,' +
      'Sala de descanso, Biblioteca digital e acervo físico com de mais de mil exemplares.',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <img className="sobre-image" src={topimage} alt="Imagem sobe nós" />
      <div className="sobre-title">SOBRE NÓS</div>
      <PhotoText
        title="Quem somos"
        text={text01}
        photo={sobre01}
        inverse={false}
        color="#f7f7f7"
        tamHeight="60vh"
      />

      <PhotoText
        title="O Graça Advogados"
        text={text02}
        photo={sobre02}
        inverse
        color="#ffffff"
        tamHeight="100vh"
      />

      <PhotoText
        id="reconhecimento"
        title="Reconhecimento"
        text={text03}
        photo={sobre03}
        inverse={false}
        color="#f7f7f7"
        tamHeight="100vh"
      />

      <PhotoText
        title="Estrutura"
        text={text04}
        photo={sobre04}
        inverse
        color="#ffffff"
        tamHeight="100vh"
      />

      <div className="container-slider">
        <h1>Escritório</h1>
        <Slider {...settings}>
          <div>
            <img src={escritorio01} />
          </div>
          <div>
            <img src={escritorio02} />
          </div>
          <div>
            <img src={escritorio03} />
          </div>
          <div>
            <img src={escritorio04} />
          </div>
          <div>
            <img src={escritorio06} />
          </div>
          <div>
            <img src={escritorio07} />
          </div>
          <div>
            <img src={escritorio08} />
          </div>
        </Slider>
      </div>
    </Container>
  );
}

export default About;
