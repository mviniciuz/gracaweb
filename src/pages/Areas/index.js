import React from 'react';

import PhotoTitle from '../../components/PhototTitle';
import PhotoText from '../../components/PhotoText';

import area01 from '../../assets/area/area01.png';
import area02 from '../../assets/area/area02.png';
import area03 from '../../assets/area/area03.png';
import area04 from '../../assets/area/area04.png';
import area05 from '../../assets/area/area05.png';
import area06 from '../../assets/area/area06.png';
import area07 from '../../assets/area/area07.png';
import area08 from '../../assets/area/area08.png';
import area09 from '../../assets/area/area09.png'

import { Container } from './styles';

const titles = {
  p1: "DIREITO EMPRESARIAL",
  p2: "DIREITO CÍVEL",
  p3: "DIREITO TRABALHISTA",
  p4: "DIREITO ELEITORAL",
  p5: "DIREITO DIGITAL",
  p6: "DIREITO TRIBUTÁRIO",
  p7: "DIREITO PENAL",
  p8: "DIREITO ADMINISTRATIVO",
}

const text02 = {
  p1: "Orientação   e   defesa   dos interesses de órgãos públicos, promo-vendo a formulação de  pareceres, " +
    "acompanhamento de licitações e contratos,  recuperação   de ativos, prestação de contas, defesas em " +
    "processos  administrativos e   disciplinares, medidas cautela-res,  ações  civis  públicas,  populares, " +
    "cominatórias, declaratórias, penais, mandados de  segurança,   habeas  corpus  e recursos nas instâncias superiores.",
}

const text03 = {
  p1: "Assessoria  jurídica  completa com ajuizamento ou defesa  de ações em todas as instâncias, consultoria " +
    "em caso de contratação e rescisão, verificação do cumprimento de convenções ou acordos coletivos, com " +
    "orientação acerca de inserção de novas cláusulas, consultoria permanente de caráter preventivo com o " +
    "objetivo de minimizar custos relativos a empregados e condenação judicial no caso de ações trabalhistas."
}

const text04 = {
  p1: "Acompanhamento de inquéritos e sindicâncias, atuação geral em ações penais que envolvam crimes contra a " +
    "ordem econômica,  contras as relações de consumo, contra o sistema financeiro, e contra o sistema " +
    "previdenciário, bem como defesas perante o Tribunal do Júri."
}

const text05 = {
  p1: "Aplicação da norma e a regulação jurídica realizada no meio digital. Mapeamento e tratamento dos dados " +
    "de pessoas físicas, funcionários, fornecedores e clientes. Treinamento de equipes e responsáveis. Revisão " +
    "de instrumentos jurídicos, política de privacidade, termos de uso, etc. Implementação de soluções entendendo " +
    "a necessidade de cada cliente.DPO - Encarregado de Dados.Selo de certificação de Implementação de Dados."
}

const text06 = {
  p1: "Atuação na elaboração de consultas e pareceres sobre a interpretação e aplicação de normas tributárias " +
    "federais, estaduais e municipais, bem como no acompanhamento de processos de compra, venda e reestruturação " +
    "de empresas. Com renomada experiência atuamos na elaboração de defesas e recursos em processos administrativos," +
    "assim como na propositura e acompanhamento de ações judiciais visando questionar a exigência e recuperar " +
    "tributos cobrados ilegalmente."
}

const text07 = {
  p1: "Licitações e Contratos administrativos, treinamentos de qualificação, orientação e aperfeiçoamento; " +
    "capacitação e introdução a iniciantes na matéria; disponibilização de material didático sobre o tema; " +
    "disponibilidade integral para esclarecimentos."
}

const text08 = {
  p1: "Orientação e defesa dos interesses dos clientes nas relações de pessoas físicas e jurídicas em questões " +
    "como família, sucessões, litígios sobre bens móveis e imóveis, contratos e obrigações, inclusive nas " +
    "relativas ao direito do consumidor e as que dizem respeito à responsabilidade civil, abrangendo danos morais " +
    "e materiais, entre outras. Assessoria consultiva e preventiva, no que se refere à elaboração de pareceres " +
    "e contratos, intermediação na realização de negócios em geral, assessoria que pode ser contratada de forma" +
    "permanente ou para cada caso específico."
}

const text09 = {
  p1: "Orientação e defesa dos interesses de clientes, candidatos em campanhas eleitorais nas esferas municipal, " +
    "estadual e federal. Acompanhamento na fase pré-eleitoral com criteriosa preparação de convenções partidárias, " +
    "registro de candidaturas, impugnação de registros, direito de resposta, representação eleitoral, investigação " +
    "judicial, medidas cautelares, crimes eleitorais, recursos nas instâncias superiores, além de mandados de " +
    "segurança, ação de impugnação a mandato eletivo e recursos contra diplomação."
}

function Areas() {
  return (
    <Container>

      <PhotoTitle
        title="Áreas de atuação"
        text={titles}
        photo={area01}
        inverse={true}
        color="#ffffff"
        tamHeight="80vh"
      />

      <PhotoText
        id="empresarial"
        title="Direito Empresarial"
        text={text02}
        photo={area02}
        inverse={false}
        color="#f7f7f7"
      />

      <PhotoText
        id="civil"
        title="Direito Cível"
        text={text08}
        photo={area08}
        inverse={true}
        color="#ffffff"
      />

      <PhotoText
        id="trabalhista"
        title="Direito Trabalhista"
        text={text03}
        photo={area03}
        inverse={false}
        color="#f7f7f7"
      />

      <PhotoText
        id="penal"
        title="Direito Penal"
        text={text04}
        photo={area04}
        inverse={true}
        color="#ffffff"
      />

      <PhotoText
        id="eleitoral"
        title="Direito Eleitoral"
        text={text09}
        photo={area09}
        inverse={false}
        color="#f7f7f7"
      />

      <PhotoText
        id="digital"
        title="Direito Digital"
        text={text05}
        photo={area05}
        inverse={true}
        color="#ffffff"
      />

      <PhotoText
        id="tributario"
        title="Direito Tributário"
        text={text06}
        photo={area06}
        inverse={false}
        color="#f7f7f7"
      />

      <PhotoText
        id="administrativo"
        title="Direito Administrativo"
        text={text07}
        photo={area07}
        inverse={true}
        color="#ffffff"
      />

    </Container>
  );
}

export default Areas;
