import React from 'react';
import { Fade } from 'react-slideshow-image';

import Fade01 from '../../../src/assets/home/carousel/fade01.jpg';
import Fade02 from '../../../src/assets/home/carousel/fade02.jpg';
import Fade03 from '../../../src/assets/home/carousel/fade03.jpg';
import Fade04 from '../../../src/assets/home/carousel/fade04.jpg';

import { Container, FadeIn01, FadeIn02, FadeIn03 } from './styles';

const fadeImages = [
  Fade01,
  Fade02,
  Fade03,
  Fade04,
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 800,
  infinite: true,
  indicators: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

export default function Slideshow() {
  return (
    <Container>
      <div className="slide-container">

        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">

              <img src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">

              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">

              <img src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  )
}
