import React from 'react';

import { Container, Moldure } from './styles';

import { AiOutlinePlusCircle } from 'react-icons/ai';

function PhotoText({ title, text, photo, inverse, color }) {

  return (
    <Container firstPhoto={!inverse} color={color}>

      <div className="photo">
        <img src={photo} />
      </div>

      <div className="text">
        <div className="box-text">
          <h1>{title}</h1>

          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <p>{text.p1 ? text.p1 : ''}</p>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <p>{text.p2 ? text.p2 : ''}</p>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <p>{text.p3 ? text.p3 : ''}</p>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <p>{text.p4 ? text.p4 : ''}</p>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <p>{text.p5 ? text.p5 : ''}</p>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <p>{text.p6 ? text.p6 : ''}</p>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <p>{text.p7 ? text.p7 : ''}</p>
          </div>
          <div className="title">
            <AiOutlinePlusCircle size={25} color="#4C6158" />
            <p>{text.p8 ? text.p8 : ''}</p>
          </div>
        </div>
      </div>

    </Container >

  );
}


export default PhotoText;
