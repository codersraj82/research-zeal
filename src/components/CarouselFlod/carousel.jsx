import React from "react";
import "./carousel.css";
import "./carosuselJs.js";
import carphoto from "./images/carphoto.jpg";
import Fullcarimage from "./images/FullcarImage.jpg";
import GoogleAdd from "./images/GoogleAdd.jpg";
import Constructions from "./images/Construction.png";

const Carousel = () => {
  return (
    <section aria-label="Newest Photos">
      <div className="mycarousel" data-carousel>
        <button className="mycaro-btn prev" data-carousel-button="prev">
          &#8656;
        </button>
        <button className="mycaro-btn next" data-carousel-button="next">
          &#8658;
        </button>
        <ul data-slides>
          <li className="slide first" data-active>
            <img src={carphoto} alt="car Photo" />
          </li>
          <li className="slide">
            <img src={Fullcarimage} alt="car Photo" />
          </li>
          <li className="slide">
            <img src={GoogleAdd} alt="car Photo" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Carousel;
