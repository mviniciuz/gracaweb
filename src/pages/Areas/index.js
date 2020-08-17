import React from 'react';

import PhotoTitle from '../../components/PhototTitle';
import PhotoText from '../../components/PhotoText';

import topimage from '../../assets/area/area.png';

import area01 from '../../assets/area/area01.png';
import area02 from '../../assets/area/area02.png';
import area03 from '../../assets/area/area03.png';
import area04 from '../../assets/area/area04.png';
import area05 from '../../assets/area/area05.png';
import area06 from '../../assets/area/area06.png';
import area07 from '../../assets/area/area07.png';
import area08 from '../../assets/area/area08.png';
import area09 from '../../assets/area/area09.png';
import area10 from '../../assets/area/area10.png';

import { Container } from './styles';

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

const text02 = {
  p1:
    'Assessoria jurídica em todas as necessidades de nossos clientes no empresarial e societário, desde a elaboração de Contratos Sociais, Alterações Contratuais; Acordos de Sócios e Cotistas; Atas de Reuniões de Aprovação de Contas e Balanços Anuais de Empresas Limitadas, Individual e EIRELI; Registro nos Órgãos Reguladores (Juntas Comerciais, Receita Federal, Receitas e Órgãos Estaduais e Municiais) aos processos de M&A (Mergers and Acquisitions (Fusões & Aquisições)), Planejamento Patrimonial e Sucessório e também criação e implementação de Governança Corporativa.',
};

const text03 = {
  p1:
    'Assessoria jurídica completa com ajuizamento ou defesa de ações em todas as instâncias, consultoria em caso de contratação e rescisão, verificação do cumprimento de convenções ou acordos coletivos, com orientação acerca de inserção de novas cláusulas, consultoria permanente de caráter preventivo com o objetivo de minimizar custos relativos a empregados e condenação judicial no caso de ações trabalhistas.',
};

const text04 = {
  p1:
    'Acompanhamento de inquéritos e sindicâncias, atuação geral em ações   penais   que  envolvam  crimes   contra  a  ordem econômica,  contras as relações de consumo, contra o sistema financeiro, e contra o sistema previdenciário, bem como defesas perante o Tribunal do Júri.',
};

const text05 = {
  p1:
    'Aplicação da norma e a regulação jurídica realizada no meio digital. Mapeamento e tratamento dos dados de pessoas físicas, funcionários, fornecedores e clientes. Treinamento de equipes e responsáveis. Revisão de instrumentos jurídicos, política de privacidade, termos de uso, etc. Implementação de soluções entendendo a necessidade de cada cliente. DPO - Encarregado de Dados. Selo de certificação de Implementação de Dados',
};

const text06 = {
  p1:
    'Elaboração de consultas e pareceres sobre a interpretação e aplicação de normas tributárias federais, estaduais e municipais, bem como no acompanhamento de processos de compra, venda e reestruturação de empresas. Com renomada experiência atuamos na elaboração de defesas e recursos em processos administrativos, assim como na propositura e acompanhamento de ações judiciais visando questionar a exigência e recuperar tributos cobrados ilegalmente.',
};

const text07 = {
  p1:
    'Orientação e defesa dos interesses de nossos clientes por meio das mais diversas medidas mandados de segurança, ação de improbidade administrativa, ações relacionadas às contratações e fornecimento de produtos e serviços para o Poder Público. Atuamos também em Licitações e Contratos administrativos na análise de editais de licitação, preparação de documentação de habilitação, elaboração de propostas (técnica e comercial), impugnações de editais, interposição de recursos administrativos, representações junto aos órgãos de controle, e credenciamentos e manutenções junto a cadastro de fornecedores de entes e instituições públicos.',
};

const text08 = {
  p1:
    'Orientação, acompanhamento e soluções jurídicas a empresas e particulares desde a fase preliminar dos negócios, tais como elaboração de contratos e acompanhamento de negociações, como também atuando em litígios dos mais variados em que se envolvem conflito entre empresas, direito do consumidor, responsabilidade civil, direito de família, cobranças e direito de propriedade.',
};

const text09 = {
  p1:
    'Orientação e defesa dos interesses de candidatos em campanhas eleitorais nas esferas municipal, estadual e federal. Acompanhamento na fase pré-eleitoral com criteriosa preparação de convenções partidárias, registro de candidaturas, impugnação de registros, direito de resposta, representação eleitoral, investigação judicial, medidas cautelares, crimes eleitorais, recursos nas instâncias superiores, além de mandados de segurança, ação de impugnação a mandato eletivo e recursos contra diplomação.',
};

const text10 = {
  p1:
    'Assessoria jurídica com orientação e atuação em processos de mediação e arbitragem na defesa dos interesses e direitos de nossos clientes, objetivando sempre a melhor solução para litígio ou conflito estabelecido, seja relações de direito de família, em contratos e relações empresariais, relações patrimoniais, relações de consumo, relações trabalhistas e empregatícias.',
};

function Areas() {
  return (
    <Container>
      <img className="area-image" src={topimage} alt="Imagem sobe nós" />
      <div className="area-title">AREAS DE ATUAÇÃO</div>

      <PhotoTitle
        text={titles}
        photo={area01}
        inverse
        color="#ffffff"
        tamHeight="60vh"
      />
      <PhotoText
        id="administrativo"
        title="Direito Administrativo"
        text={text07}
        photo={area07}
        inverse={false}
        color="#f7f7f7"
      />

      <PhotoText
        id="civil"
        title="Direito Cível"
        text={text08}
        photo={area08}
        inverse
        color="#ffffff"
      />

      <PhotoText
        id="digital"
        title="Direito Digital"
        text={text05}
        photo={area05}
        inverse={false}
        color="#f7f7f7"
      />

      <PhotoText
        id="eleitoral"
        title="Direito Eleitoral"
        text={text09}
        photo={area09}
        inverse
        color="#ffffff"
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
        id="penal"
        title="Direito Penal"
        text={text04}
        photo={area04}
        inverse
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
        id="tributario"
        title="Direito Tributário"
        text={text06}
        photo={area06}
        inverse
        color="#ffffff"
      />

      <PhotoText
        id="mediacao"
        title="Mediação e Arbitragem"
        text={text10}
        photo={area10}
        inverse={false}
        color="#f7f7f7"
      />
    </Container>
  );
}

export default Areas;
