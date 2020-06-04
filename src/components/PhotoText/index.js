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
          <p>{text.p1 ? text.p1 : null}</p>
          <p>{text.p2 ? text.p2 : null}</p>
          <p>{text.p3 ? text.p3 : null}</p>
        </div>
      </div>
    </Container >
  );
}


export default PhotoText;
