import React from "react";
import Carousel from "react-bootstrap/Carousel";
import GoogleAdd from "../CarouselFlod/images/GoogleAdd.jpg";
import Logo from "../CarouselFlod/images/logo.png";
import FullcarImage from "../CarouselFlod/images/FullcarImage.jpg";
import Whatsapp from "../CarouselFlod/images/whatsapp.png";
import Construction from "../CarouselFlod/images/Construction.png";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "../CarouselFlod/Maincarousel.css";
const MainCarousel = () => {
  return (
    <Carousel className="bg-dark carouselflex" variant="dark">
      <Carousel.Item className="CarItem">
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image src={GoogleAdd} fluid />

        {/* <Carousel.Caption className="caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="CarItem">
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image src={Logo} fluid />

        {/* <Carousel.Caption className="caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image src={FullcarImage} fluid />

        {/* <Carousel.Caption className="py-4">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Image src={Whatsapp} fluid />
        {/* <Carousel.Caption className="py-4">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Image src={Construction} fluid />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
