import React from 'react';


import { Container, Moldure } from './styles';

function PhotoText({ title, text, photo, inverse, color, tamHeight, id }) {

  return (
    <Container id={id} firstPhoto={!inverse} color={color} tamHeight={tamHeight}>
      <div className="photo">
        <img src={photo} />
      </div>

      <div className="text">
        <div className="box-text">
          <h1>{title}</h1>
          <p>{text.p1 ? text.p1 : ''}</p>
          <p>{text.p2 ? text.p2 : ''}</p>
          <p>{text.p3 ? text.p3 : ''}</p>
        </div>
      </div>
    </Container >
  );
}


export default PhotoText;
