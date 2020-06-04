import React from 'react';

import principle01 from '../../assets/principle/principle01.png'

import { Container } from './styles';

function Principle() {
  return (
    <Container>
      <div className="content">
        <h1> NOSSOS PRINCÍPIOS</h1>
        <img src={principle01} alt="imagem dos principios" />

        <div className="box">
          <div className="box-item">
            <h1>Missão</h1>
            <p>“Promover o sucesso da organização e seus clientes,
            oferecendo uma equipe comprometida com soluções em
                assessoria e consultoria jurídica.”</p>

          </div>
          <div className="box-item">
            <h1>Visão</h1>
            <p>“Ser referência de uma organização comprometida com a ética
               e o profissionalismo, proporcionando soluções jurídicas seguras e inovadoras.”</p>

          </div>
          <div className="box-item">
            <h1>Valores</h1>
            <p>“Comprometimento com a organização, parceiros e clientes; Integridade; Trabalho em equipe;
               Responsabilidade Social.”</p>

          </div>
        </div>
      </div>
    </Container>
  )
}

export default Principle;
