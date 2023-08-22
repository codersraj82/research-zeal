import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MainCarousel from "../CarouselFlod/MainCarosoule";
import HondaBrv from "./vehiclecards/HondaBrv";
import "../Home/Main.css";
import "./vehiclecards/vehiclecard.css";
import Carousel from "../CarouselFlod/carousel";

function Home() {
  return (
    <>
      {/* <MainCarousel /> */}
      <Carousel />
      <div class="homecmp">
        <HondaBrv className="hondaimg" />
        <HondaBrv />
        <HondaBrv />
      </div>
    </>
  );
}

export default Home;
