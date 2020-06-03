import React from 'react';

import { Container } from './styles';

import socioFundador01 from '../../assets/team/socio-fundador01.png';
import socioFundador02 from '../../assets/team/socio-fundador02.png';

import socio01 from '../../assets/team/socio01.png';
import socio02 from '../../assets/team/socio02.png';
import socio03 from '../../assets/team/socio03.png';
import socio04 from '../../assets/team/socio04.png';

import associado01 from '../../assets/team/associado01.png';
import associado02 from '../../assets/team/associado02.png';
import associado03 from '../../assets/team/associado03.png';
import associado04 from '../../assets/team/associado04.png';
import associado05 from '../../assets/team/associado05.png';

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

  const socios = [
    {
      id: 1,
      nome: 'TALITA CABRERA',
      perfil: 'talita.cabrera@graca.adv.br',
      img: socio01
    },
    {
      id: 2,
      nome: 'CAMILA MUNHOZ',
      perfil: 'camila.munhoz@graca.adv.br',
      img: socio02
    },

    {
      id: 3,
      nome: 'ANDRE MIRANDA',
      perfil: 'andre.miranda@garaca.adv.br',
      img: socio03
    },
    {
      id: 4,
      nome: 'SERGIO S. TAKIGONE',
      perfil: 'sergio.takigone@graca.adv.br',
      img: socio04
    },
  ]

  const associados = [
    {
      id: 1,
      nome: 'JOÃO F. FLAUZINO',
      perfil: 'joao.flauzino@graca.adv.br',
      img: associado01
    },
    {
      id: 2,
      nome: 'MURILO IORIS',
      perfil: 'murilo.ioris@graca.adv.br',
      img: associado02
    },
    {
      id: 3,
      nome: 'PRISCILLA LUCIO',
      perfil: 'priscilla.lucio@graca.adv.br',
      img: associado03
    },
    {
      id: 4,
      nome: 'RAUL P. SANTIN',
      perfil: 'raul.santin@graca.adv.br',
      img: associado04
    },

    {
      id: 5,
      nome: 'RAFAELA FÁVERO',
      perfil: 'rafaela.favero@graca.adv.br',
      img: associado05
    },
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

      <div className="socios">
        <h1>SÓCIOS</h1>
        <ul>
          {socios.map(item => (
            <li>
              <img src={item.img} alt="imagem do sócio" />
              <h2>{item.nome}</h2>
              <p>{item.perfil}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="associados">
        <h1>ASSOCIADOS</h1>
        <ul>
          {associados.map(item => (
            <li>
              <img src={item.img} alt="imagem do associado" />
              <h2>{item.nome}</h2>
              <p>{item.perfil}</p>
            </li>
          ))}
        </ul>

      </div>
    </Container>
  );
}

export default Team;
