import React from 'react';

import { Container } from './styles';

import socioFundador01 from '../../assets/team/socio-fundador01.png';
import socioFundador02 from '../../assets/team/socio-fundador02.png';


function Team() {
  const sociosFundadores = [
    {
      id: 1,
      nome: 'DR.JOÃO ALBERO GRAÇA',
      perfil: "Advogado formado pela Universidade Estadual de Londrina - UEL. Aperfeiçoado em Direito da Função " +
        "Pública, pela Universidade de Lisboa - U. LISBOA, Portugal. Pós-Graduado em Direito e Negócios " +
        "Internacionais, pela Universidade Federal de Santa Catarina - UFSC. Pós-Graduado pela  Universidad " +
        "Complutense de Madrid - U. C. M., Espanha em Derecho  de  los Negocios Internacionales. Doutorando em" +
        "Direito Tributário Europeu pela Universidad de Castilha - La Mancha, Espanha. Especialista em Direito" +
        " Tributário pelo IBET - SP",
      img: socioFundador01
    },
    {
      id: 2,
      nome: 'DRA. DENIZE CABULON GRAÇA',
      perfil: "Advogada  formada   pela   Universidade Estadual de   Londrina – UEL, Paraná, Brasil. Especializada" +
        "em Direito  Processual Civil, pelo Instituto Brasileiro de Estudos Jurídicos – IBEJ, Paraná, Brasil." +
        "Aperfeiçoada  em Gestão    de   Projetos,   SP e em  Liderança pela  Dale  Carnegie,   PR. Capacitação" +
        "em Administração  Legal    promovido pela GVLaw – Fun-dação  Getúlio Vargas,   FENALAW-SP.   Atua como" +
        "Diretora Geral do escritório Graça Advogados.",
      img: socioFundador02
    }
  ]

  const advogados = [
    {
      id: 1,
      nome: 'ANDRE MIRANDA',
    },
    {
      id: 2,
      nome: 'CAMILA MUNHOZ',
    },
    {
      id: 3,
      nome: 'JOÃO F. FLAUZINO',
    },
    {
      id: 4,
      nome: 'MURILO IORIS',
    },
    {
      id: 5,
      nome: 'PRISCILLA LUCIO',
    },
    {
      id: 6,
      nome: 'RAFAELA FÁVERO',
    },
    {
      id: 7,
      nome: 'RAUL P. SANTIN',
    },
    {
      id: 8,
      nome: 'SERGIO S. TAKIGONE',
    },
    {
      id: 9,
      nome: 'TALITA CABRERA',
    },
  ]

  const associados = [

  ]

  return (
    <Container>
      <div className="socios-fundadores">
        <h1>SÓCIOS FUNDADORES</h1>
        <ul>
          {sociosFundadores.map(item => (
            <li>
              <img src={item.img} alt="imagem do socio fundador" />
              <h2>{item.nome}</h2>
              <p>{item.perfil}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="advogados">
        <h1>Advogados</h1>
        <ul>
          {advogados.map(item => (
            <li>
              <h3>{item.nome}</h3>
            </li>
          ))}
        </ul>
      </div>

    </Container>
  );
}

export default Team;
