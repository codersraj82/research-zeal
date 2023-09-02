import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Carousel//
import Carousel from "../CarouselFlod/carousel";
import { carouselData } from "../CarouselFlod/carouselData";
//Cards//
import Cards from "../cards/cards";
import { cardData } from "../cards/cardData";
import { Link } from "react-router-dom";
import "../Home/Main.css";

import DriverCards from "../cards/DiverCards";
import { driverData } from "../cards/driverData";

function Home() {
  return (
    <div className="home-main-div">
      {/* <MainCarousel /> */}
      <div className="herosection">
        <div className="home-carousel">
          <Carousel slides={carouselData} />
        </div>
        <div className="right-section">
          <RightSide />
        </div>
      </div>
      <h3 className="card-h3">Hire Car</h3>
      <div className="card-container" id="hire-car">
        <Cards cardData={cardData} />
      </div>
      <h3 className="card-h3">Hire Driver</h3>
      <div className="card-container" id="hire-car">
        <DriverCards driverData={driverData} />
      </div>
    </div>
  );
}

const RightSide = () => {
  return (
    <>
      <nav className="sidebar">
        <h2>Services</h2>
        <ul>
          <li>
            <Link to="/hire-car">Hire Car</Link>
          </li>
          <li>
            <Link to="/hire-driver">Hire Driver</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
