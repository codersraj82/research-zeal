import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Carousel//
import Carousel from "../CarouselFlod/carousel";
import { carouselData } from "../CarouselFlod/carouselData";
//Cards//
import Cards from "../cards/cards";
import { cardData } from "../cards/cardData";

import "../Home/Main.css";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <>
      {/* <MainCarousel /> */}
      <div className="home-carousel">
        <Carousel slides={carouselData} />
      </div>
      <div className="card-container">
        <Cards cardData={cardData} />
      </div>
    </>
  );
}

export default Home;
