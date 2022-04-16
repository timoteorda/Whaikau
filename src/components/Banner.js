import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
  
export default function Banner() {
  return (
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="banner"
            src="../img/bannerUno.jpg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="banner"
            src="../img/bannerDos.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="banner"
            src="../img/bannerTres.png"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="banner"
            src="../img/bannerCuatro.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="banner"
            src="../img/bannerCinco.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
  );
}
