import React, { useEffect, useState } from "react";
import "./carousel.css";

// import carphoto from "./images/carphoto.jpg";
// import Fullcarimage from "./images/FullcarImage.jpg";
// import GoogleAdd from "./images/GoogleAdd.jpg";
// import Constructions from "./images/Construction.png";

const Carousel = ({ slides }) => {
  console.log(slides);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideright();
      }, 4000);
  });
  const slideleft = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const slideright = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="carousel-wrapper">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel-card carousel-card-active"
                  : "carousel-card"
              }
            >
              <img className="card-image" src={slide.image} alt="" />
              <div className="card-overlay">
                <h1 className="card-title">{slide.title}</h1>
              </div>
            </div>
          );
        })}

        <div id="mycarousel-arrow-left" onClick={slideleft}>
          &lsaquo;
        </div>
        <div id="mycarousel-arrow-right" onClick={slideright}>
          &rsaquo;
        </div>
        <div className="carousel-piganation">
          {slides.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "piganation-card piganation-card-active"
                    : "piganation-card"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
