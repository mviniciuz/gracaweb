import React from 'react';

import { Player } from 'video-react';

import video from '../../assets/home/video-graca.mp4';

import { Container } from './styles';

function SliderHome() {
  return (
    <Container>
      <video autoPlay="autoplay" muted="muted" loop>
        <source src={video} type="video/mp4" />
      </video>
    </Container>
  );
}

export default SliderHome;
