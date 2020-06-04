import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function PhotoText({ title, text, photo, inverse, color, tamHeight }) {

  return (
    <Container firstPhoto={!inverse} color={color} tamHeight={tamHeight}>

      <div className="photo">
        <img src={photo} />
      </div>

      <div className="text">
        <div className="box-text">
          <h1>{title}</h1>

          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <a href="/area#empresarial" target="_parent">
              <p>{text.p1 ? text.p1 : ''}</p>
            </a>
          </div>
          <div className="title" >
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <a href="/area#civil" target="_parent">
              <p>{text.p2 ? text.p2 : ''}</p>
            </a>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <a href="/area#trabalhista" target="_parent">
              <p>{text.p3 ? text.p3 : ''}</p>
            </a>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <a href="/area#eleitoral" target="_parent">
              <p>{text.p4 ? text.p4 : ''}</p>
            </a>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <a href="/area#digital" target="_parent">
              <p>{text.p5 ? text.p5 : ''}</p>
            </a>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <a href="/area#tributario" target="_parent">
              <p>{text.p6 ? text.p6 : ''}</p>
            </a>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <a href="/area#penal" target="_parent">
              <p>{text.p7 ? text.p7 : ''}</p>
            </a>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <a href="/area#administrativo" target="_parent">
              <p>{text.p8 ? text.p8 : ''}</p>
            </a>
          </div>
        </div>
      </div>

    </Container >

  );
}


export default PhotoText;
